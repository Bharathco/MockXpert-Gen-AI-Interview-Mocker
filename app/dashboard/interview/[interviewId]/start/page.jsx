"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';

function StartInterview({params}) {
    const [interviewData,setInterviewData]=useState();
    const[mockInterviewQuestion,setMockInterviewQuestion]=useState();
    const[activeQuestionIndex,setActiveQuestionIndex]=useState(0)
    useEffect(()=>{
        GetInterviewDetails();

    },[]);

     /**
   * used to get Interview details by mockid/interview id
   */
  const GetInterviewDetails = async () => {
  const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
        
        const jsonMockResp=JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp)
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
  }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        <QuestionSection 
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        />

        {/* {Vidio/Audio Recording} */}
        <RecordAnswerSection/>
      </div>
    </div>
  )
}

export default StartInterview
