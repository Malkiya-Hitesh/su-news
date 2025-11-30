// app/api/news/route.js
import connectDB from "@/app/lib/mongoos";
import News from "@/app/modules/news";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const slug = searchParams.get("slug");
    const taluko = searchParams.get("taluko");

    const latest = searchParams.get("latest");



    let qury = {};
    if (slug) {
      qury.slug = slug;
    }
    if (type) {
      qury.type = type;
    }
    if (taluko) {
      qury.taluko = taluko;
    }



    if (latest) {
      const todayEnd = new Date();
      todayEnd.setHours(23, 59, 59, 999);

      const yesterdayStart = new Date();
      yesterdayStart.setDate(yesterdayStart.getDate() - 1);
      yesterdayStart.setHours(0, 0, 0, 0);

      const news = await News.find({
        createdAt: { $gte: yesterdayStart, $lte: todayEnd }
      }).sort({ createdAt: -1 });
      return NextResponse.json(news, { status: 200 });


    }


    const news = await News.find(qury);

    return NextResponse.json(news, { status: 200 });
  } catch (err) {


    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
