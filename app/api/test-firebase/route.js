import { adminDb, isFirebaseReady } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!isFirebaseReady || !adminDb) {
      return NextResponse.json(
        {
          success: false,
          error: "Firebase is not initialized",
        },
        { status: 503 },
      );
    }

    await adminDb.collection("test").doc("connection").get();
    return NextResponse.json({
      success: true,
      message: "Firebase connection successful",
    });
  } catch (error) {
    console.error("Firebase test error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}