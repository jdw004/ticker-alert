## StockSentinel MVP To-Do

### Week 1: Data + AI prompt

- [ ] Set up Twitter API or snscrape to fetch tweets
- [ ] Draft and test OpenAI prompt for financial sentiment
- [ ] Design DB schema (recommendation table)

### Week 2: Backend + SMS

- [ ] Build backend to analyze + store recommendations
- [ ] Integrate Twilio for SMS delivery
- [ ] Store SMS delivery status

### Week 3: API + polish

- [ ] Create API routes: get recommendations, send SMS
- [ ] Refine OpenAI prompt for better confidence + reasoning
- [ ] Handle errors + rate limits

### Week 4: Deploy + doc

- [ ] Deploy backend to Railway
- [ ] Document architecture + usage
- [ ] Prepare resume bullet + screenshots/demo

# StockSentinel — Tech Stack

## Overview

StockSentinel is a trading signal app that analyzes tweets from reputable financial news sources using AI, generates Buy/Sell/Hold recommendations with confidence levels and reasoning, and delivers alerts via SMS.

This MVP focuses on low cost, easy deployment, and a clean architecture that can scale.

## Backend

Framework:

- Express.js (Node.js)
- Lightweight, fast, and easy to build REST APIs
- Well-supported ecosystem for Twilio, OpenAI, database clients

Hosting:

- Railway
- Free starter tier
- One platform for backend + database + deployment

## Database

Database:

- PostgreSQL (Railway-hosted)
- Powerful SQL database with native JSON and array support
- Free tier includes 0.5 GB storage — plenty for MVP

Schema highlights:

- Store recommendations, tweet IDs, tickers, AI-generated data, and SMS delivery status

## External APIs & Services

- OpenAI API: GPT-3.5 / GPT-4o for sentiment analysis and reasoning
- Twilio: SMS alert delivery (use free trial credits for MVP)
- snscrape: Fetch tweets (or Twitter API if you have access)

## Additional Tools

- dotenv: Manage environment variables securely
- nodemon: For development auto-reload
- node-postgres (pg): PostgreSQL client for Node.js
- axios or fetch: Make external API calls

## Cost Summary (MVP)

| Component               | Cost                                  |
| ----------------------- | ------------------------------------- |
| Express.js + Node       | Free                                  |
| Railway backend hosting | Free (starter tier)                   |
| Railway Postgres        | Free (starter tier up to 0.5GB)       |
| OpenAI API              | Pay-per-token (~$0–5 for MVP)         |
| Twilio SMS              | Free trial credits, then ~$0.0075/SMS |

## Why this stack?

Minimal cost (free tiers cover MVP needs)  
Easy to set up and deploy  
Professional, scalable architecture  
Great for resume and portfolio
