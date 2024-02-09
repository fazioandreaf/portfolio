import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url);
	const name = searchParams.get('name');

	try {
		if (!name) throw new Error('Names required');
		await sql`INSERT INTO RockScissorPaperTable (Name, user_wins, pc_wins) VALUES (${name}, 0 ,0);`;
	} catch (error) {
		return NextResponse.json({error}, {status: 500});
	}

	return NextResponse.json({name, user_wins: 0, pc_wins: 0}, {status: 200});
}
