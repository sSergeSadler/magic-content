import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";
import AIChart from "./ai-chart";

const AIUsage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const availableCredit: number = 100000000000;
  let totalUsage: number = 0;

  const userAIOutputs = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  if (userAIOutputs.length > 0) {
    userAIOutputs.forEach((output) => {
      totalUsage = totalUsage + Number(output.description?.length);
    });
    revalidatePath("/");
  }

  return (
    <div>
      <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
    </div>
  );
};

export default AIUsage;
