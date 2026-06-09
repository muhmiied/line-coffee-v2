import { NextResponse, type NextRequest } from 'next/server'

import { updateSession } from '@/lib/supabase/middleware'

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isLoginRoute =
    pathname === '/dashboard/login' || pathname.startsWith('/dashboard/login/')

  const { response, user } = await updateSession(request)

  if (isLoginRoute) {
    return response
  }

  if (!user) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/dashboard/login'
    loginUrl.searchParams.set('redirectedFrom', pathname)

    const redirectResponse = NextResponse.redirect(loginUrl)

    response.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie)
    })

    return redirectResponse
  }

  return response
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
