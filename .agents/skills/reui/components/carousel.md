# Carousel (ReUI)

From [reui.io/components](https://reui.io/components). Style: `default`.
Install blocks: `pnpm dlx shadcn@latest add @reui/<id>` (add `@reui` registry in components.json — see [registry docs](https://reui.io/docs/registry)).

11 entr(y/ies).

## Index

| ID | Title | Type | Notes |
| --- | --- | --- | --- |
| `c-carousel-1` | Basic carousel with single item | registry:block | Basic carousel with single item |
| `c-carousel-2` | Vertical carousel orientation | registry:block | Vertical carousel orientation |
| `c-carousel-3` | Carousel with multiple items visible | registry:block | Carousel with multiple items visible |
| `c-carousel-4` | Carousel with responsive basis | registry:block | Carousel with responsive basis |
| `c-carousel-5` | Carousel with autoplay plugin | registry:block | Carousel with autoplay plugin |
| `c-carousel-6` | Carousel with centered slide alignment | registry:block | Carousel with centered slide alignment |
| `c-carousel-7` | Carousel with custom spacing | registry:block | Carousel with custom spacing |
| `c-carousel-8` | Carousel with images and overlays | registry:block | Carousel with images and overlays |
| `c-carousel-9` | Carousel with thumbnail navigation | registry:block | Carousel with thumbnail navigation |
| `c-carousel-10` | Carousel with overlay thumbnail navigation | registry:block | Carousel with overlay thumbnail navigation |
| `c-carousel-11` | Carousel with dots navigation and content overlays | registry:block | Carousel with dots navigation and content overlays |

## Source

### Basic carousel with single item (`c-carousel-1`)

Target: `components/examples/c-carousel-1.tsx`

Basic carousel with single item

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="relative aspect-square overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/800/800?grayscale&random=${index + 1}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  )
}
```

### Vertical carousel orientation (`c-carousel-2`)

Target: `components/examples/c-carousel-2.tsx`

Vertical carousel orientation

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[325px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 pt-1">
              <div className="p-1">
                <Card className="relative h-[145px] overflow-hidden border-0 p-0">
                  <Image
                    src={`https://picsum.photos/600/300?grayscale&random=${index + 10}`}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
```

### Carousel with multiple items visible (`c-carousel-3`)

Target: `components/examples/c-carousel-3.tsx`

Carousel with multiple items visible

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card className="relative aspect-square overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/400/400?grayscale&random=${index + 5}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  )
}
```

### Carousel with responsive basis (`c-carousel-4`)

Target: `components/examples/c-carousel-4.tsx`

Carousel with responsive basis

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <Card className="relative aspect-3/4 overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/600/800?grayscale&random=${index + 15}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  )
}
```

### Carousel with autoplay plugin (`c-carousel-5`)

Target: `components/examples/c-carousel-5.tsx`

Carousel with autoplay plugin

```tsx
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="relative aspect-square overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/800/800?grayscale&random=${index + 25}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

### Carousel with centered slide alignment (`c-carousel-6`)

Target: `components/examples/c-carousel-6.tsx`

Carousel with centered slide alignment

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-[70%]">
            <div className="p-1">
              <Card className="relative aspect-video overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/800/450?grayscale&random=${index + 30}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

### Carousel with custom spacing (`c-carousel-7`)

Target: `components/examples/c-carousel-7.tsx`

Carousel with custom spacing

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1">
            <div className="p-1">
              <Card className="relative aspect-square overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/600/600?grayscale&random=${index + 35}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

### Carousel with images and overlays (`c-carousel-8`)

Target: `components/examples/c-carousel-8.tsx`

Carousel with images and overlays

```tsx
import Image from "next/image"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Pattern() {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="group/card relative aspect-video overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/1000/800?grayscale&random=${index + 10}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="scale-100 object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                />
                {/* Background fade effects */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    Slide {index + 1}
                  </h3>
                  <p className="text-sm text-white/90">
                    Beautiful landscape description for slide {index + 1}.
                  </p>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

### Carousel with thumbnail navigation (`c-carousel-9`)

Target: `components/examples/c-carousel-9.tsx`

Carousel with thumbnail navigation

```tsx
"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const ITEMS_COUNT = 10

export function Pattern() {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    const index = mainApi.selectedScrollSnap()
    setSelectedIndex(index)
    thumbApi.scrollTo(index)
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)
    return () => {
      mainApi.off("select", onSelect)
      mainApi.off("reInit", onSelect)
    }
  }, [mainApi, onSelect])

  return (
    <div className="flex w-full max-w-md flex-col gap-3 p-4">
      <Carousel setApi={setMainApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: ITEMS_COUNT }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="bg-muted rounded-xl relative aspect-video overflow-hidden">
                <Image
                  src={`https://picsum.photos/1000/800?grayscale&random=${index + 20}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        setApi={setThumbApi}
        opts={{
          containScroll: "keepSnaps",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 flex-row">
          {Array.from({ length: ITEMS_COUNT }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/5 cursor-pointer pl-2 sm:basis-1/6"
              onClick={() => onThumbClick(index)}
            >
              <div
                className={cn(
                  "rounded-lg relative aspect-square overflow-hidden border-2 transition-all",
                  index === selectedIndex
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-40 hover:opacity-70"
                )}
              >
                <Image
                  src={`https://picsum.photos/400/400?grayscale&random=${index + 20}`}
                  alt={`Thumb ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
```

### Carousel with overlay thumbnail navigation (`c-carousel-10`)

Target: `components/examples/c-carousel-10.tsx`

Carousel with overlay thumbnail navigation

```tsx
"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const ITEMS_COUNT = 10

export function Pattern() {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return
    const index = mainApi.selectedScrollSnap()
    setSelectedIndex(index)
    thumbApi.scrollTo(index)
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)
    return () => {
      mainApi.off("select", onSelect)
      mainApi.off("reInit", onSelect)
    }
  }, [mainApi, onSelect])

  return (
    <div className="flex w-full max-w-2xl items-center justify-center p-4">
      <div className="group rounded-xl relative w-full overflow-hidden">
        {/* Main Carousel */}
        <Carousel setApi={setMainApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: ITEMS_COUNT }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="bg-muted relative aspect-video w-full overflow-hidden">
                  <Image
                    src={`https://picsum.photos/1200/675?grayscale&random=${index + 60}`}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Overlay Thumbnails Container */}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-4 transition-opacity duration-300">
          <div className="relative mx-auto w-full max-w-md">
            <Carousel
              setApi={setThumbApi}
              opts={{
                containScroll: "keepSnaps",
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 flex-row">
                {Array.from({ length: ITEMS_COUNT }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/4 cursor-pointer pl-2 sm:basis-1/8"
                    onClick={() => onThumbClick(index)}
                  >
                    <div
                      className={cn(
                        "rounded-md relative aspect-square overflow-hidden border-2 transition-all duration-300",
                        index === selectedIndex
                          ? "border-white opacity-100 ring-2 ring-black/20"
                          : "border-white/40 opacity-50 hover:opacity-80"
                      )}
                    >
                      <Image
                        src={`https://picsum.photos/200/200?grayscale&random=${index + 60}`}
                        alt={`Thumb ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### Carousel with dots navigation and content overlays (`c-carousel-11`)

Target: `components/examples/c-carousel-11.tsx`

Carousel with dots navigation and content overlays

```tsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Pattern() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel setApi={setApi} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="group/card relative aspect-square overflow-hidden border-0 p-0">
                <Image
                  src={`https://picsum.photos/800/800?grayscale&random=${index + 45}`}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="scale-100 object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                />
                {/* Background fade effects */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 top-auto flex flex-col justify-end bg-black/20 p-4">
                  <h3 className="text-xl font-bold text-white">
                    Slide {index + 1}
                  </h3>
                  <p className="text-sm text-white/90">
                    Feature description for slide {index + 1}.
                  </p>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 py-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "rounded-full h-2 cursor-pointer transition-all duration-500 ease-in-out",
              index === current
                ? "bg-primary w-4 opacity-100"
                : "bg-muted-foreground w-2 opacity-30 hover:opacity-50"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}
```
