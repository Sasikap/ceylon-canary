# Package Customization Guide

## How to Add or Modify Packages

### Location
File: `frontend/js/script.js`
Find: `const packages = [`

### Package Template

```javascript
{
    id: 'unique-id',                    // Unique identifier (lowercase, no spaces)
    name: 'Package Name',               // Display name
    area: 'Geographic Area',            // Which area of Sri Lanka
    duration: 2,                        // Number of days
    places: [
        'Place 1',
        'Place 2',
        'Place 3'
    ],
    experiences: [
        'Activity 1',
        'Activity 2',
        'Activity 3'
    ],
    includes: [
        'Accommodation',
        'Meals',
        'Transport',
        'Guide'
    ]
}
```

## Example: Adding a New Package

```javascript
{
    id: 'galle-fort',
    name: 'Historic Galle Fort Tour',
    area: 'South Coast',
    duration: 2,
    places: [
        'Galle Fort',
        'Galle Lighthouse',
        'Unawatuna Beach'
    ],
    experiences: [
        'Fort walking tour',
        'Sunset at lighthouse',
        'Traditional fishing',
        'Local market visit'
    ],
    includes: [
        '2 nights hotel stay',
        'Daily breakfast',
        'Professional guide',
        'Entry fees to fort'
    ]
}
```

## Tips for Good Packages

### 1. Unique IDs
- Use lowercase: ✅ `mountain-adventure` ❌ `Mountain Adventure`
- No spaces: ✅ `tea-country` ❌ `tea country`
- Descriptive: ✅ `sigiriya-rock` ❌ `pkg1`

### 2. Clear Areas
Use real Sri Lankan regions:
- Central Province
- South Coast
- East Coast
- Tea Country
- Western Province
- Northern Province
- North Central Province

### 3. Meaningful Places
- Actual destinations/sites
- Well-known attractions
- Specific locations

### 4. Varied Experiences
- Activities that stand out
- Mix of adventure and relaxation
- Cultural and natural experiences
- Food and local interactions

### 5. Clear Inclusions
- Specify accommodations level
- Meal information
- Transport details
- Guide services
- Equipment if needed

## Pre-Built Packages (Already in System)

1. **Sigiriya** - Ancient Fortress Explorer (2 days, Central)
2. **South Coast** - Beach Paradise (3 days)
3. **Mountains** - Mountain Retreat (3 days, Tea Country)
4. **Culture** - Cultural Heritage Tour (2 days)
5. **Wildlife** - Wild Nature Adventure (2 days, East)
6. **Spiritual** - Spiritual Wellness Retreat (3 days)
7. **Adventure** - Thrilling Adventures (2 days)
8. **Colombo** - Urban Explorer Pack (2 days)

## Modifying Existing Packages

1. Find the package in the array
2. Change any field:
   - `name` - What travelers see
   - `area` - Region name
   - `duration` - Days needed
   - `places` - Add/remove destinations
   - `experiences` - Update activities
   - `includes` - Modify what's offered

Example - Update Beach package to 4 days:
```javascript
// Before
duration: 3,

// After
duration: 4,
```

## Adding Photos/Images

Future enhancement:
```javascript
{
    id: 'beaches',
    name: 'Beach Paradise Package',
    area: 'South Coast',
    duration: 3,
    image: 'images/beach.jpg',  // Add this line
    // ... rest of package
}
```

Then update HTML in `index.html` to display the image in package cards.

## Best Practices

✅ **DO:**
- Keep descriptions concise
- Use specific location names
- Make experiences sound exciting
- Include all important details
- Test changes in browser

❌ **DON'T:**
- Use generic descriptions
- Duplicate IDs
- Include too many items (3-5 is good)
- Make experiences too technical
- Forget to save your changes

## Removing a Package

Simply delete the entire `{ ... }` block from the packages array. 

Example - Remove the cultural package:
```javascript
// Delete this entire section:
{
    id: 'culture',
    name: 'Cultural Heritage Tour',
    // ... all the details
},
```

## Testing Your Changes

1. Save the file
2. Refresh the browser (Ctrl+R or Cmd+R)
3. Check if new package appears
4. Try selecting it
5. Verify it appears in the itinerary

## Pricing Recommendations

*Not implemented in demo, but helpful for planning:*

Add pricing information to backend:
```javascript
{
    id: 'beaches',
    name: 'Beach Paradise Package',
    // ... existing fields
    pricePerPerson: 599,           // Add this
    groupDiscount: {               // Add this
        3: 0.05,   // 5% off for 3+ people
        5: 0.10    // 10% off for 5+ people
    }
}
```

## Getting Help

- **Package not showing?** - Check browser console (F12) for errors
- **Selection not working?** - Verify all IDs are unique
- **Email issues?** - Not related to packages, see main README.md
- **Need more packages?** - Just copy a template and modify it

---

**Happy customizing! 🎨**
