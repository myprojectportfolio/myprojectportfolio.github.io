elect with a custom one, mostly pulled from
// http://primercss.io.
//

.custom-select {
  display: inline-block;
  width: 100%;
  height: $custom-select-height;
  padding: $custom-select-padding-y ($custom-select-padding-x + $custom-select-indicator-padding) $custom-select-padding-y $custom-select-padding-x;
  line-height: $custom-select-line-height;
  color: $custom-select-color;
  vertical-align: middle;
  background: $custom-select-bg $custom-select-indicator no-repeat right $custom-select-padding-x center;
  background-size: $custom-select-bg-size;
  border: $custom-select-border-width solid $custom-select-border-color;
  @if $enable-rounded {
    border-radius: $custom-select-border-radius;
  } @else {
    border-radius: 0;
  }
  appearance: none;

  &:focus {
    border-color: $custom-select-focus-border-color;
    outline: 0;
    box-shadow: $custom-select-focus-box-shadow;

    &::