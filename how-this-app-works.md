I'll write a comprehensive explanation of how the app works in the `how-this-app-works.md` file:

```markdown:how-this-app-works.md
# How the AI Insights Hub Works

## Overview
The AI Insights Hub is a React-based web application that organizes and displays AI/LLM resources in a searchable, filterable interface. Here's a detailed breakdown of how it works:

## Core Components

### 1. Resource Organization
Resources are structured in a hierarchical category system:
- Main Categories (tag)
- Sub-Categories (tag2)
- Sub-Sub-Categories (tag3)

Example hierarchy:
```

Learning Resources (main)
├── Free Resources (sub)
│ └── Beginner (sub-sub)
└── Academic Courses (sub)
└── Advanced (sub-sub)

````

### 2. Data Structure
Resources are stored in `resources.ts` with the following structure:
```typescript
{
  title: "Category Title",
  tag: "Main Category",
  tag2: "Sub Category",
  tag3: "Sub-Sub Category",
  description: "Category Description",
  resources: [
    {
      id: number,
      name: string,
      link: string,
      description: string,
      favicon: string
    }
  ]
}
````

### 3. Main Components

#### CategoryFilter Component

- Generates the filtering UI for all category levels
- Uses a reducer to build category hierarchy from resource data
- Displays:
  - Main category buttons
  - Sub-category buttons (when main category selected)
  - Sub-sub-category buttons (when sub-category selected)

#### ResourceGrid Component

- Displays resource blocks based on selected filters
- Handles:
  - Category filtering
  - Search filtering
  - Resource display and layout
  - "View All" functionality

### 4. State Management

The app uses React Context for global state management:

- `CategoryContext`: Manages selected category state
- `SearchContext`: Manages search query state

## User Flow

1. **Initial Load**

   - App displays all resource categories
   - Search bar is empty
   - All resources are visible

2. **Category Selection**

   - User clicks a main category
   - Sub-categories appear if available
   - Resources are filtered to show only relevant items
   - Process repeats for sub and sub-sub categories

3. **Search Functionality**

   - User types in search bar
   - Resources are filtered in real-time
   - Search works across:
     - Resource names
     - Descriptions
     - Category titles

4. **Resource Viewing**
   - Resources are displayed in cards with:
     - Favicon
     - Title
     - Description
     - Link to resource
   - "View All" button shows expanded view of category

## Technical Implementation

### Filtering Logic

```typescript
// Category filtering
if (selectedCategory !== "all") {
  [mainTag, subTag, subSubTag] = selectedCategory.split("-");
  // Filter based on tag depth
}

// Search filtering
if (searchQuery) {
  // Filter based on search terms
}
```

### Category Building

The app dynamically builds category structure by:

1. Collecting unique tags from resources
2. Building hierarchy using Sets and Maps
3. Converting to array structure for rendering

### Performance Considerations

- Lazy loading of resources
- Efficient filtering algorithms
- Responsive design for all screen sizes

## File Structure

```
app/
├── components/
│   ├── CategoryFilter.tsx    // Category filtering UI
│   ├── ResourceGrid.tsx      // Resource display grid
│   ├── SearchBar.tsx        // Search functionality
│   └── ViewAll.tsx          // Expanded view modal
├── context/
│   ├── CategoryContext.tsx  // Category state management
│   └── SearchContext.tsx    // Search state management
└── data/
    └── resources.ts         // Resource data
```

```

```
