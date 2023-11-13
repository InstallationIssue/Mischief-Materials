import prisma from "@/app/db"
import { createScenario } from "../scenario"
import { z } from "zod"

export default async function handle (req: any, res: any) {
	
	const { name, description, image } = req.body;

	const result = await prisma.scenario.create({
        data: {
            name: name,
            description: description,
            image: image
        },
	});
	res.json(result);
	
	/*const data = req.body;

	console.log(data)

	try {
	  const result = await prisma.scenario.create({
        data: {
            name: data.name,
            description: data.description,
            image: data.image
        }
	  });
	  res.status(200).json(result);
	} catch (err) {
	  console.log(err);
	  res.status(403).json({ err: "Error occured while adding a new scenario." });
	}
	*/
  };



  












/*
export async function create(req: FormData, res) {
  const posts = await prisma.post.findMany()
  res.json(posts)
}
*/

/*
const schema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string()
})

export default async function POST(request){
	
	const parsed = schema.parse({
        name: req.name,
        description: req.get('description'),
        image: req.get('image')
    })
	
	try {
		const { category_name } = await request.json();
		const scenario = await prisma.scenario.create({
			data: {
				name: parsed.name,
				description: parsed.description,
				image: parsed.image
			}
		});

		const data = await scenario.json();
		return NextResponse.json(data);
	  } catch (error) {
		console.error("eror in post", error);
	  }

	console.log(parsed)

	console.log(scenario)

	return scenario
	  */
	/*
  	const res = await createScenario(parsed.name, parsed.description, parsed.image)
 
  	return Response.json({ res })
	*/
  	/*
    

    return scenario
    */
//}
