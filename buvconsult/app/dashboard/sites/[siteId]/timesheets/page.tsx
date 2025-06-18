"use client"


import * as React from "react";
import aIAgent from "@/app/AIactions";
import {Button} from "@/components/ui/button";

export default function(){


        const [messages, setMessages] = React.useState("");


        async function handleBtn(e){
        e.preventDefault();
        const answer = await aIAgent()
        setMessages(answer)

            }

    return(

        <>

            <form onSubmit={handleBtn}>
                <Button type="submit">
                    Generate haiku
                </Button>

            </form>
             <label>{messages}</label>
        </>
    )



}