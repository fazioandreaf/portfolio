import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url);
	const name = searchParams.get('name');
	let rowsUser: object[];

	try {
		if (!name) throw new Error('Name required');
		const nameObj = await sql`SELECT * FROM RockScissorPaperTable WHERE name = ${name}`;
		rowsUser = nameObj.rows;
	} catch (error) {
		return NextResponse.json({error}, {status: 500});
	}

	return NextResponse.json({rowsUser}, {status: 200});
}
