import React from 'react'
import Button from "@/components/ui/Button";
import { Counter } from '@/components/shared/counter';

export default function Home() {
  return (
    <div>
      <Button type="primary">Button</Button>
      <Counter />
    </div>
  )
}
