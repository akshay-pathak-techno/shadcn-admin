import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const tabListVariant = cva('inline-flex  items-center justify-center  ', {
  variants: {
    variant: {
      default: 'p-1 h-9 rounded-lg bg-muted text-muted-foreground',
      primary:
        'w-full flex-row flex-wrap justify-start gap-4 bg-transparent  md:gap-12 border-b border-silver',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const tabTriggerVariant = cva(
  'text-md inline-flex items-center justify-center whitespace-nowrap  px-3 py-1  font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
  {
    variants: {
      variant: {
        default:
          'p-1 rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
        primary:
          'font-normal text-charcoal pb-4  data-[state=active]:font-medium data-[state=active]:border-b data-[state=active]:border-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Tabs = TabsPrimitive.Root

type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
> & {
  variant?: 'default' | 'primary'
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabListVariant({ variant }), className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  variant?: 'default' | 'primary'
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabTriggerVariant({ variant }), className)}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
