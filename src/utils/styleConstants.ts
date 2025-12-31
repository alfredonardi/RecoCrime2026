/**
 * Shared Tailwind CSS class constants for consistent styling across the application
 */

// =============================================================================
// INPUT STYLES
// =============================================================================

/**
 * Standard input field styling
 * Includes: full width, consistent height, padding, border, shadow, and focus states
 */
export const INPUT_CLASSES =
  'w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

/**
 * Alternative input height (shorter)
 */
export const INPUT_CLASSES_SHORT =
  'w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

/**
 * Textarea styling
 * Similar to input but without fixed height
 */
export const TEXTAREA_CLASSES =
  'w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical';

/**
 * Select dropdown styling
 */
export const SELECT_CLASSES =
  'w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer';

// =============================================================================
// BUTTON STYLES
// =============================================================================

/**
 * Primary button (blue)
 */
export const BUTTON_PRIMARY =
  'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors';

/**
 * Secondary button (gray)
 */
export const BUTTON_SECONDARY =
  'px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors';

/**
 * Danger button (red)
 */
export const BUTTON_DANGER =
  'px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors';

/**
 * Success button (green)
 */
export const BUTTON_SUCCESS =
  'px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors';

/**
 * Small button variant
 */
export const BUTTON_SMALL =
  'px-3 py-1 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors';

// =============================================================================
// LABEL STYLES
// =============================================================================

/**
 * Standard label styling
 */
export const LABEL_CLASSES = 'block text-sm font-medium text-gray-700 mb-2';

/**
 * Required field label (with asterisk)
 */
export const LABEL_REQUIRED = 'block text-sm font-medium text-gray-700 mb-2 after:content-["*"] after:ml-1 after:text-red-500';

/**
 * Inline label (for checkboxes/radios)
 */
export const LABEL_INLINE = 'inline-block text-sm font-medium text-gray-700 ml-2';

// =============================================================================
// FORM GROUP STYLES
// =============================================================================

/**
 * Form group container
 */
export const FORM_GROUP = 'mb-6 space-y-2';

/**
 * Fieldset styling
 */
export const FIELDSET_CLASSES = 'border border-gray-300 rounded-lg p-4 mb-6';

/**
 * Legend styling
 */
export const LEGEND_CLASSES = 'text-lg font-semibold text-gray-900 px-2 mb-4';

// =============================================================================
// LAYOUT STYLES
// =============================================================================

/**
 * Card container
 */
export const CARD_CLASSES = 'bg-white rounded-lg shadow-md p-6 mb-6';

/**
 * Section container
 */
export const SECTION_CLASSES = 'mb-8';

/**
 * Grid layout (2 columns)
 */
export const GRID_2_COLS = 'grid grid-cols-1 md:grid-cols-2 gap-4';

/**
 * Grid layout (3 columns)
 */
export const GRID_3_COLS = 'grid grid-cols-1 md:grid-cols-3 gap-4';

/**
 * Flex row with gap
 */
export const FLEX_ROW = 'flex flex-row gap-4 items-center';

/**
 * Flex column with gap
 */
export const FLEX_COL = 'flex flex-col gap-4';

// =============================================================================
// SPACING CONSTANTS
// =============================================================================

/**
 * Standard spacing values used throughout the app
 */
export const SPACING = {
  xs: 'space-y-2',
  sm: 'space-y-4',
  md: 'space-y-6',
  lg: 'space-y-8',
} as const;

/**
 * Margin bottom values
 */
export const MARGIN_BOTTOM = {
  xs: 'mb-2',
  sm: 'mb-4',
  md: 'mb-6',
  lg: 'mb-8',
} as const;

// =============================================================================
// HEIGHT CONSTANTS
// =============================================================================

/**
 * Common height values for inputs
 */
export const HEIGHT = {
  input: 'h-[46px]',
  inputShort: 'h-[42px]',
  button: 'h-[42px]',
  header: 'h-[92px]',
} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Combines multiple class strings, filtering out falsy values
 * @param classes - Variable number of class strings or conditional classes
 * @returns Combined class string
 */
export const cn = (...classes: (string | false | null | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Conditional class helper
 * @param condition - Boolean condition
 * @param trueClass - Class to use if condition is true
 * @param falseClass - Class to use if condition is false
 * @returns The appropriate class string
 */
export const conditionalClass = (
  condition: boolean,
  trueClass: string,
  falseClass: string = ''
): string => {
  return condition ? trueClass : falseClass;
};
