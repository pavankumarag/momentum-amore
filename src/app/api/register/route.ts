import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]");
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = ["fullName", "age", "gender", "profession", "phone", "email", "city", "interests", "relationshipStatus", "consent"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    if (!body.consent) {
      return NextResponse.json({ error: "Consent is required" }, { status: 400 });
    }

    await ensureDataFile();

    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
    const registration = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      ...body,
      registeredAt: new Date().toISOString(),
    };
    data.push(registration);
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, id: registration.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    const data = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
