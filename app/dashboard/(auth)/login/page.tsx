'use client'

import { FormEvent, Suspense, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { createClient } from '@/lib/supabase/client'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const unauthorizedMessage = useMemo(() => {
    return searchParams.get('error') === 'unauthorized'
      ? 'Your account is not authorized for the Line Coffee admin area.'
      : null
  }, [searchParams])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const supabase = createClient()
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError('Invalid email or password.')
        return
      }

      router.replace('/dashboard')
      router.refresh()
    } catch {
      setError('Login is unavailable. Check the Supabase environment settings.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120d0a] px-4 py-10 text-stone-100">
      <section className="w-full max-w-md rounded-lg border border-amber-200/15 bg-[#1b130f] p-6 shadow-2xl shadow-black/30">
        <div className="mb-6 space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-200/70">
            Line Coffee
          </p>
          <h1 className="text-2xl font-semibold">Admin login</h1>
          <p className="text-sm leading-6 text-stone-300">
            Sign in with your approved admin account.
          </p>
        </div>

        {(unauthorizedMessage || error) && (
          <div className="mb-5 rounded-md border border-red-300/30 bg-red-950/40 px-4 py-3 text-sm text-red-100">
            {error ?? unauthorizedMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-stone-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              autoComplete="email"
              className="h-11 w-full rounded-md border border-amber-100/15 bg-black/25 px-3 text-sm text-stone-50 outline-none transition focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/15"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-stone-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              autoComplete="current-password"
              className="h-11 w-full rounded-md border border-amber-100/15 bg-black/25 px-3 text-sm text-stone-50 outline-none transition focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/15"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </div>

          <button
            className="h-11 w-full rounded-md bg-amber-200 px-4 text-sm font-semibold text-stone-950 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#120d0a] text-stone-100">
          Loading...
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
