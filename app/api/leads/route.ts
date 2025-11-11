import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import { Lead } from "@/models/Lead";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    await connectDB();

    // check duplicate
    const existing = await Lead.findOne({ email });
    if (existing) {
      return NextResponse.json({
        ok: true,
        duplicate: true,
      });
    }

    const lead = await Lead.create({ email });

    return NextResponse.json({
      ok: true,
      lead,
    });
  } catch (error) {
    console.error("POST /api/leads error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();

    const leads = await Lead.find().sort({ createdAt: 1 });

    return NextResponse.json({
      leads,
    });
  } catch (error) {
    console.error("GET /api/leads error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
