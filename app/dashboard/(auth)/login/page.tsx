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
    <main>
      <section>
        <h1>Admin login</h1>

        {(unauthorizedMessage || error) && (
          <p role="alert">{error ?? unauthorizedMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </div>

          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main>Loading...</main>}>
      <LoginForm />
    </Suspense>
  )
}
