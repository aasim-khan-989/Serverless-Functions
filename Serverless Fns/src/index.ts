/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env{

}
export default {
	async fetch(request: { method: string; headers: any; body: any; url: any; }, env: any, ctx: any): Promise<Response> {
		
	
		if(request.method=="GET"){
			console.log(request.headers)
		console.log(request.body)
		console.log(request.method)
		console.log(request.url)
			return Response.json({
				message:"hi i am aasim this is my first serverless backend"

			})
		}
		else{
			return Response.json({
				error:"you did not send a right request"
			})
		}
		


	},
} ;
