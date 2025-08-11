# GreenByte Solutions - E-Waste Recycling Platform

## Overview

GreenByte Solutions is a comprehensive web application for an advanced e-waste recycling and precious metal recovery company in India. The platform showcases the company's hydrometallurgical technology capabilities, compliance with Indian e-waste regulations, and provides contact functionality for potential clients seeking EPR certificates and recycling services.

The application is built as a single-page application (SPA) with a marketing website that highlights the company's technology, services, environmental impact, and partnerships. It includes a contact form system for lead generation and customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, utilizing a component-based architecture. The application uses:

- **React Router**: wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables
- **State Management**: React Query (TanStack Query) for server state management
- **Build Tool**: Vite for development and bundling

The component structure follows a modular approach with reusable UI components in `/components/ui/` and page-specific components organized by feature. The design system uses CSS custom properties for theming with support for light/dark modes.

### Backend Architecture
The backend is implemented using Express.js with TypeScript in ESM format. Key architectural decisions:

- **API Design**: RESTful endpoints with JSON communication
- **Data Storage**: Initially uses in-memory storage with interface abstraction for future database integration
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development Setup**: Vite middleware integration for hot module replacement

The storage layer uses an interface-based approach (`IStorage`) allowing easy migration from memory storage to database persistence.

### Data Schema Design
The application uses Drizzle ORM with PostgreSQL schema definitions but currently operates with in-memory storage. The schema includes:

- **Users Table**: Basic user management structure
- **Contact Inquiries Table**: Captures lead information with company details, service interests, and timestamps
- **Type Safety**: Full TypeScript integration with Zod validation schemas

### Contact Management System
The contact form system captures potential customer inquiries with structured data including:
- Personal and company information
- Service interest categorization
- Message content for detailed requirements
- Automatic timestamping for lead tracking

### Development Workflow
The application uses a monorepo structure with shared schemas between frontend and backend. The build process supports both development and production environments with proper asset handling and optimization.

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, React Query for data fetching
- **UI Component Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with PostCSS processing
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation

### Backend Infrastructure
- **Database**: Drizzle ORM configured for PostgreSQL (currently using Neon serverless)
- **Server Framework**: Express.js with TypeScript support
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation and type safety

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Development Environment**: Replit-specific plugins for enhanced development experience
- **Font Loading**: Google Fonts (Inter) for typography
- **Icons**: Lucide React for consistent iconography

The application is designed to be deployment-ready with environment-based configuration and proper production optimizations.