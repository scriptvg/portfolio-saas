# Rating (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

9 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-rating-1` | Basic rating. | registry:block | Basic rating. |
| `c-rating-2` | Rating with decimal value. | registry:block | Rating with decimal value. |
| `c-rating-3` | Rating with show value. | registry:block | Rating with show value. |
| `c-rating-4` | Rating with editable. | registry:block | Rating with editable. |
| `c-rating-5` | Rating with size. | registry:block | Rating with size. |
| `c-rating-6` | Rating with review summary | registry:block | Rating with review summary |
| `c-rating-7` | Interactive half-star rating | registry:block | Interactive half-star rating |
| `c-rating-8` | Emoji reaction rating | registry:block | Emoji reaction rating |
| `c-rating-9` | Rating with review text input | registry:block | Rating with review text input |

## Source

### Basic rating. (`c-rating-1`)

Target: `components/examples/c-rating-1.tsx`

Basic rating.

```tsx
import { Rating } from "@/components/reui/rating"

export function Pattern() {
  return <Rating rating={4} />
}
```

### Rating with decimal value. (`c-rating-2`)

Target: `components/examples/c-rating-2.tsx`

Rating with decimal value.

```tsx
import { Rating } from "@/components/reui/rating"

export function Pattern() {
  return <Rating rating={3.5} />
}
```

### Rating with show value. (`c-rating-3`)

Target: `components/examples/c-rating-3.tsx`

Rating with show value.

```tsx
import { Rating } from "@/components/reui/rating"

export function Pattern() {
  return <Rating rating={4.5} showValue={true} />
}
```

### Rating with editable. (`c-rating-4`)

Target: `components/examples/c-rating-4.tsx`

Rating with editable.

```tsx
"use client"

import { useState } from "react"
import { Rating } from "@/components/reui/rating"
import { toast } from "sonner"

export function Pattern() {
  const [productRating, setProductRating] = useState(0)

  const handleRatingChange = (rating: number) => {
    setProductRating(rating)

    toast.success("Rated {rating} out of 5", {
      description: `Rated ${rating} out of 5`,
    })
  }

  return (
    <div className="space-y-8">
      <Rating
        rating={productRating}
        editable={true}
        onRatingChange={handleRatingChange}
        showValue={true}
      />
    </div>
  )
}
```

### Rating with size. (`c-rating-5`)

Target: `components/examples/c-rating-5.tsx`

Rating with size.

```tsx
import { Rating } from "@/components/reui/rating"

export function Pattern() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Rating rating={4} size="sm" />
      <Rating rating={4} />
      <Rating rating={4} size="lg" />
    </div>
  )
}
```

### Rating with review summary (`c-rating-6`)

Target: `components/examples/c-rating-6.tsx`

Rating with review summary

```tsx
import { Rating } from "@/components/reui/rating"

import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

const distribution = [
  { stars: 5, count: 124, percentage: 62 },
  { stars: 4, count: 45, percentage: 22 },
  { stars: 3, count: 18, percentage: 9 },
  { stars: 2, count: 8, percentage: 4 },
  { stars: 1, count: 5, percentage: 3 },
]

export function Pattern() {
  return (
    <div className="mx-auto w-full max-w-xs space-y-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl font-semibold">4.6</span>
        <Rating rating={4.6} size="sm" />
        <span className="text-muted-foreground text-xs">
          Based on 200 reviews
        </span>
      </div>
      <Separator />
      <div className="space-y-2">
        {distribution.map((row) => (
          <div key={row.stars} className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground w-3 text-right text-xs">
              {row.stars}
            </span>
            <Progress
              value={row.percentage}
              className="h-1.5 flex-1 **:data-[slot=progress-indicator]:bg-yellow-400"
            />
            <span className="text-muted-foreground w-7 text-right text-xs">
              {row.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Interactive half-star rating (`c-rating-7`)

Target: `components/examples/c-rating-7.tsx`

Interactive half-star rating

```tsx
"use client"

import { useState } from "react"
import { Rating } from "@/components/reui/rating"

export function Pattern() {
  const [rating, setRating] = useState(3.5)

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-4">
      <Rating rating={rating} onRatingChange={setRating} editable />
      <p className="text-muted-foreground text-sm">
        Your rating:{" "}
        <span className="text-foreground font-semibold">
          {rating.toFixed(1)}
        </span>{" "}
        / 5
      </p>
    </div>
  )
}
```

### Emoji reaction rating (`c-rating-8`)

Target: `components/examples/c-rating-8.tsx`

Emoji reaction rating

```tsx
"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

const emojis = [
  { value: 1, emoji: "😞", label: "Terrible" },
  { value: 2, emoji: "😕", label: "Bad" },
  { value: 3, emoji: "😐", label: "Okay" },
  { value: 4, emoji: "😊", label: "Good" },
  { value: 5, emoji: "🤩", label: "Amazing" },
]

export function Pattern() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-3">
      <p className="text-sm font-medium">How was your experience?</p>
      <div className="flex gap-2">
        {emojis.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setSelected(item.value)}
            className={cn(
              "rounded-lg flex size-10 items-center justify-center border-2 text-2xl transition-all",
              selected === item.value
                ? "border-border bg-muted scale-110"
                : "hover:bg-muted border-transparent"
            )}
          >
            {item.emoji}
          </button>
        ))}
      </div>
      {selected && (
        <p className="text-muted-foreground text-sm">
          {emojis.find((e) => e.value === selected)?.label}
        </p>
      )}
    </div>
  )
}
```

### Rating with review text input (`c-rating-9`)

Target: `components/examples/c-rating-9.tsx`

Rating with review text input

```tsx
"use client"

import { useState } from "react"
import { Rating } from "@/components/reui/rating"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Pattern() {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  return (
    <Card className="mx-auto w-full max-w-xs">
      <CardContent className="space-y-5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-sm font-semibold">Write a Review</h3>
          <Rating rating={rating} onRatingChange={setRating} editable />
          {rating > 0 && (
            <p className="text-muted-foreground text-xs">
              {rating <= 2
                ? "We're sorry to hear that"
                : rating <= 3
                  ? "Thanks for your feedback"
                  : "Glad you enjoyed it!"}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="review-text" className="text-sm">
            Your review
          </Label>
          <Textarea
            id="review-text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Tell us what you think..."
            rows={3}
          />
        </div>

        <Button disabled={rating === 0} size="sm" className="w-full">
          Submit Review
        </Button>
      </CardContent>
    </Card>
  )
}
```
