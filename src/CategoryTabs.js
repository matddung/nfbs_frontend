import React from 'react'

export function CategoryTabs ({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className='border-b'>
      <div className='flex space-x-8'>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`py-4 px-1 -mb-px text-sm font-medium ${
              activeCategory === category
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
