# Input (shadcnui-blocks)

Scraped from [shadcnui-blocks.com/components/input](https://www.shadcnui-blocks.com/components/input).
12 variant(s). Install base UI with `pnpm dlx shadcn@latest add input` when `registryDependencies` includes it.

## Variants index

| ID | Title | Notes |
| --- | --- | --- |
| `input-01` | Default Input | A default input component |
| `input-02` | Ring Input | A ring input component |
| `input-03` | Filled Input | A filled input component |
| `input-04` | Disabled Input | A disabled input component |
| `input-05` | Input with Label | An input with label component |
| `input-06` | Input with Button | An input with button component |
| `input-07` | Input with Adornment | An input with adornment component |
| `input-08` | Input with Helper Text | An input with helper text component |
| `input-09` | Input with Error Message | An input with error message component |
| `input-10` | Input with Form | An input with form component |
| `input-11` | File Input | A file input component |
| `input-12` | Dropzone Input | A dropzone input component |

## Variant source

### Default Input (`input-01`)

A default input component

```tsx
import { Input } from "@/components/ui/input";

export default function InputDemo() {
  return <Input className="max-w-xs" placeholder="Email" type="email" />;
}
```

### Ring Input (`input-02`)

A ring input component

```tsx
import { Input } from "@/components/ui/input";

export default function InputRingDemo() {
  return (
    <Input
      className="max-w-xs focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-500/20"
      placeholder="Email"
      type="email"
    />
  );
}
```

### Filled Input (`input-03`)

A filled input component

```tsx
import { Input } from "@/components/ui/input";

export default function FilledInputDemo() {
  return (
    <Input
      className="max-w-xs border-none bg-secondary shadow-none"
      placeholder="Email"
      type="email"
    />
  );
}
```

### Disabled Input (`input-04`)

A disabled input component

```tsx
import { Input } from "@/components/ui/input";

export default function DisabledInputDemo() {
  return (
    <Input className="max-w-xs" disabled placeholder="Email" type="email" />
  );
}
```

### Input with Label (`input-05`)

An input with label component

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputWithLabelDemo() {
  return (
    <div className="w-full max-w-xs">
      <Label htmlFor="email">Email</Label>
      <Input className="mt-2" id="email" placeholder="Email" type="email" />
    </div>
  );
}
```

### Input with Button (`input-06`)

An input with button component

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputWithButtonDemo() {
  return (
    <div className="flex w-full max-w-xs items-center gap-2">
      <Input placeholder="Email" type="email" />
      <Button className="shadow">Subscribe</Button>
    </div>
  );
}
```

### Input with Adornment (`input-07`)

An input with adornment component

```tsx
"use client";

import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export default function InputWithAdornmentDemo() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-xs space-y-2">
      {/* <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2"> */}
      <InputGroup>
        <InputGroupAddon>
          <MailIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          className="border-0 shadow-none focus-visible:ring-0"
          placeholder="Email"
          type="email"
        />
      </InputGroup>
      {/* </div> */}
      <InputGroup>
        <InputGroupAddon>
          <LockIcon className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          className="border-0 shadow-none focus-visible:ring-0"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />

        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={togglePasswordVisibility}>
            {showPassword ? (
              <EyeOffIcon className="size-4 text-muted-foreground" />
            ) : (
              <EyeIcon className="size-4 text-muted-foreground" />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <Button className="w-full">Log In</Button>
    </div>
  );
}
```

### Input with Helper Text (`input-08`)

An input with helper text component

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputWithHelperTextDemo() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="email-address">Email Address</Label>
      <Input id="email-address" placeholder="Email" type="email" />
      <p className="text-[0.8rem] text-muted-foreground">
        We&apos;ll never share your email with anyone else.
      </p>
    </div>
  );
}
```

### Input with Error Message (`input-09`)

An input with error message component

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputWithErrorMessageDemo() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label className="text-destructive" htmlFor="email-address">
        Email Address
      </Label>
      <Input
        className="border-destructive focus-visible:border-destructive/70 focus-visible:ring-destructive/25"
        id="email-address"
        placeholder="Email"
        type="email"
      />
      <p className="text-[0.8rem] text-destructive">This email is invalid.</p>
    </div>
  );
}
```

### Input with Form (`input-10`)

An input with form component

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { InputHTMLAttributes } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type schemaType = z.infer<typeof schema>;

export default function InputWithFormDemo() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "hello@example.com",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: schemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <InputWithForm<schemaType>
          name="email"
          placeholder="Enter your email"
          title="Email"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

type InputWithFormProps<K> = {
  name: keyof K & string;
  title?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithForm<K>({
  title,
  name,
  className,
  ...props
}: InputWithFormProps<K>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {title && <FormLabel htmlFor={`${name}-${title}`}>{title}</FormLabel>}
          <FormControl>
            <Input
              id={`${name}-${title}`}
              {...field}
              {...props}
              className={cn(
                "aria-invalid:border-destructive aria-invalid:ring-destructive",
                className
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
```

### File Input (`input-11`)

A file input component

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FileInputDemo() {
  return (
    <div className="w-full max-w-xs">
      <Label htmlFor="picture">Profile Picture</Label>
      <Input className="mt-2" id="picture" type="file" />
    </div>
  );
}
```

### Dropzone Input (`input-12`)

A dropzone input component

```tsx
"use client";

import { ImageIcon, XCircleIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const ImagePreview = ({
  url,
  onRemove,
}: {
  url: string;
  onRemove: () => void;
}) => (
  <div className="relative aspect-square">
    <button
      className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
      onClick={onRemove}
    >
      <XCircleIcon className="h-5 w-5 fill-primary text-primary-foreground" />
    </button>
    <Image
      alt=""
      className="h-full w-full rounded-md border border-border object-cover"
      height={500}
      src={url}
      width={500}
    />
  </div>
);

export default function InputDemo() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  return (
    <div className="w-full max-w-40">
      <Label htmlFor="profile">Profile Picture</Label>
      <div className="mt-2 w-full">
        {profilePicture ? (
          <ImagePreview
            onRemove={() => setProfilePicture(null)}
            url={profilePicture}
          />
        ) : (
          <Dropzone
            accept={{
              "image/png": [".png", ".jpg", ".jpeg", ".webp"],
            }}
            maxFiles={1}
            onDrop={(acceptedFiles) => {
              const file = acceptedFiles[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setProfilePicture(imageUrl);
              }
            }}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              isDragAccept,
              isDragReject,
            }) => (
              <div
                {...getRootProps()}
                className={cn(
                  "flex aspect-square items-center justify-center rounded-md border border-dashed focus:border-primary focus:outline-hidden",
                  {
                    "border-primary bg-secondary": isDragActive && isDragAccept,
                    "border-destructive bg-destructive/20":
                      isDragActive && isDragReject,
                  }
                )}
              >
                <input {...getInputProps()} id="profile" />
                <ImageIcon className="h-16 w-16" strokeWidth={1.25} />
              </div>
            )}
          </Dropzone>
        )}
      </div>
    </div>
  );
}
```
