import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
	const {searchParams} = new URL(request.url);
	const name = searchParams.get('name');
	const field = searchParams.get('field');
	const value = searchParams.get('value');

	try {
		if (!name || !field || !value) throw new Error('Params are required');
		if (field === 'user_wins') {
			await sql`UPDATE RockScissorPaperTable SET user_wins = ${value} WHERE name = ${name};`;
		} else if (field === 'pc_wins') {
			await sql`UPDATE RockScissorPaperTable SET pc_wins =  ${value} WHERE name = ${name};`;
		} else {
			throw new Error('Field to update not correct');
		}
	} catch (error) {
		return NextResponse.json({error}, {status: 500});
	}

	return NextResponse.json({result: 'done'}, {status: 200});
}
