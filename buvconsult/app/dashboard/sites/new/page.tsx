import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export default function NewSiteRoute(){

    return(
        <div className="flex flex-col flex-1 items-center justify-center">
            <Card className="min-w-[450px]">
              <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="flex flex-col gap-y-6">
                      <div className="grid gap-2">
                          <Label>Site name</Label>
                          <Input placeholde="Site name"/>
                      </div>
                      <div className="grid gap-2">
                          <Label>Subdirectory</Label>
                          <Input placeholder="Subdirectory"/>

                      </div>
                      <div className="grid gap-2">
                          <Label>Description</Label>
                          <Textarea placeholder="Small Description for your site"/>

                      </div>
                  </div>
              </CardContent>
                <CardFooter>
                    <Button>Submit</Button>
                </CardFooter>
            </Card>


        </div>
    )
}