// Embedded icons from Open Iconic.
// Released under MIT and copyright 2014 Waybury.
// https://useiconic.com/open


// Checkboxes and radios
//
// Base class takes care of all the key behavioral aspects.

.custom-control {
  position: relative;
  display: block;
  min-height: (1rem * $line-height-base);
  padding-left: $custom-control-gutter;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: $custom-control-spacer-x;
}

.custom-control-input {
  position: absolute;
  z-index: -1; // Put the input behind the label so it doesn't overlay text
  opacity: 0;

  &:checked ~ .custom-control-label::before {
    color: $custom-control-indicator-checked-color;
    @include gradient-bg($custom-control-indicator-checked-bg);
    @include box-shadow($custom-control-indicator-checked-box-shadow);
  }

  &:focus ~ .custom-control-label::before {
    // the mixin is not used here