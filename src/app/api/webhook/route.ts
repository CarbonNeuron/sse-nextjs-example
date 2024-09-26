import { NextRequest, NextResponse } from 'next/server'

import { sendMessageToClient } from '@/lib/clients'

export async function POST(req: NextRequest) {
    const event = await req.json()

    if (event.type === 'deployment.success') {
        // Assuming event contains client ID
        const clientId = event.clientId
        sendMessageToClient(clientId, JSON.stringify({ success: true }))
    }

    return NextResponse.json({ received: true })
}