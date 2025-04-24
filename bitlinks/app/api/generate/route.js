import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "Short URL already exists!",
        },
        { status: 409 }
      ); // Conflict
    }

    // Insert the new URL mapping
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(), // optional: track creation time
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    });
  } catch (error) {
    console.error("MongoDB POST Error:", error);
    return Response.json(
      {
        success: false,
        error: true,
        message: "Server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
