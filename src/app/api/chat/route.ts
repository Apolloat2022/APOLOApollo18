import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationId } = await request.json();

    // TODO: Implement actual AI integration with OpenAI/LangChain
    // For now, return a demo response
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Demo responses based on keywords
    let response = "Thanks for your message! I'm currently in demo mode. Soon I'll be powered by AI to help you with all your questions about Apollo Academy!";
    
    if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
      response = "Our lesson pricing varies by instrument and package. Piano lessons start at $60 for a 30-minute session, $90 for 45 minutes, and $120 for an hour. We also offer package deals! Would you like me to schedule a free trial lesson for you?";
    } else if (message.toLowerCase().includes('schedule') || message.toLowerCase().includes('book') || message.toLowerCase().includes('trial')) {
      response = "I'd be happy to help you book a free trial lesson! To get started, I'll need a few details: What instrument are you interested in? What's the student's age? And what days/times work best for you?";
    } else if (message.toLowerCase().includes('piano')) {
      response = "Great choice! Piano is one of our most popular instruments. We have experienced piano instructors for all skill levels, from beginners to advanced. Our piano lessons focus on technique, music theory, and playing songs you love. Would you like to schedule a free trial lesson?";
    } else if (message.toLowerCase().includes('guitar')) {
      response = "Excellent! We offer both acoustic and electric guitar lessons. Our guitar instructors teach various styles including classical, rock, pop, and jazz. We provide guitars for trial lessons. Would you like me to check our instructor availability?";
    }

    return NextResponse.json({
      message: response,
      conversationId: conversationId || Date.now().toString(),
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}