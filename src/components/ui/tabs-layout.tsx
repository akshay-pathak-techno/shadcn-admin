import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

interface TabsLayoutPros {
  tabs: Tab[]
  defaultTab: string
}

interface Tab {
  label: string
  value: string
  Component: React.ComponentType
}

export const Tabslayout: React.FC<TabsLayoutPros> = ({ tabs, defaultTab }) => {
  return (
    <Tabs
      orientation='vertical'
      defaultValue={defaultTab}
      className='space-y-2 md:mr-12'
    >
      <div className='w-full pb-2'>
        <TabsList variant='primary'>
          {tabs.map(({ label, value }) => (
            <TabsTrigger key={value} variant='primary' value={value}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map(({ value, Component }) => (
        <TabsContent key={value} value={value}>
          {<Component />}
        </TabsContent>
      ))}
    </Tabs>
  )
}
