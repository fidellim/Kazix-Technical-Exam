import { NextResponse } from 'next/server'
import matches from './matches-list.json'

// export async function GET(request) {
//     return NextResponse.json(games)
// }

export async function GET(request) {
    // const { page = 1, pageSize = 10 } = request.query
    const page = request.nextUrl.searchParams.get('page')
    const pageSize = request.nextUrl.searchParams.get('pageSize')
    console.log(page, pageSize)
    if (!page || !pageSize) {
        // If there is no query for pagination, return all games
        return NextResponse.json(matches.matches)
    }

    // Assuming 'games' is the complete list of games from your JSON file
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + Number(pageSize)
    const paginatedMatches = matches.matches.slice(startIndex, endIndex)

    return NextResponse.json(paginatedMatches)
}
