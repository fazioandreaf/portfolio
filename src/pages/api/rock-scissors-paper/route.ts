import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
	try {
		const result =
			await sql`CREATE TABLE RockScissorPaperTable ( name varchar(255), user_wins integer , pc_wins integer);`;
		return NextResponse.json({result}, {status: 200});
	} catch (error) {
		return NextResponse.json({error}, {status: 500});
	}
}
