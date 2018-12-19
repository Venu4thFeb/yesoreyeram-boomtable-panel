System.register([], function (exports_1, context_1) {
    "use strict";
    var BoomTableTimeBasedThreshold, BoomTablePattern;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BoomTableTimeBasedThreshold = (function () {
                function BoomTableTimeBasedThreshold() {
                    this.enabledDays = "Sun,Mon,Tue,Wed,Thu,Fri,Sat";
                    this.from = "0000";
                    this.name = "Early morning of everyday";
                    this.threshold = "70,90";
                    this.to = "0530";
                }
                return BoomTableTimeBasedThreshold;
            }());
            exports_1("BoomTableTimeBasedThreshold", BoomTableTimeBasedThreshold);
            BoomTablePattern = (function () {
                function BoomTablePattern(options) {
                    this.row_col_wrapper = "_";
                    if (options && options.row_col_wrapper) {
                        this.row_col_wrapper = options.row_col_wrapper;
                    }
                    this.bgColors = options && options.bgColors ? options.bgColors : "green|orange|red";
                    this.bgColors_overrides = options && options.bgColors_overrides ? options.bgColors_overrides : "0->green|2->red|1->yellow";
                    this.clickable_cells_link = options && options.clickable_cells_link ? options.clickable_cells_link : "";
                    this.col_name = options && options.col_name ? options.col_name : this.row_col_wrapper + "1" + this.row_col_wrapper;
                    this.decimals = options && options.decimals ? options.decimals : 2;
                    this.delimiter = options && options.delimiter ? options.delimiter : ".";
                    this.enable_bgColor = false;
                    this.enable_bgColor_overrides = false;
                    this.enable_clickable_cells = false;
                    this.enable_time_based_thresholds = false;
                    this.enable_transform = false;
                    this.enable_transform_overrides = false;
                    this.filter = {
                        value_above: "",
                        value_below: "",
                    };
                    this.format = options && options.format ? options.format : "none";
                    this.name = options && options.name ? options.name : "New Pattern";
                    this.null_color = options && options.null_color ? options.null_color : "darkred";
                    this.null_value = options && options.null_value ? options.null_value : "No data";
                    this.pattern = options && options.pattern ? options.pattern : "^server.*cpu$";
                    this.row_name = options && options.row_name ? options.row_name : this.row_col_wrapper + "0" + this.row_col_wrapper;
                    this.thresholds = options && options.thresholds ? options.thresholds : "70,90";
                    this.time_based_thresholds = [];
                    this.transform_values = options && options.transform_values ? options.transform_values : "_value_|_value_|_value_";
                    this.transform_values_overrides = options && options.transform_values_overrides ? options.transform_values_overrides : "0->down|1->up";
                    this.valueName = options && options.valueName ? options.valueName : "avg";
                }
                return BoomTablePattern;
            }());
            exports_1("BoomTablePattern", BoomTablePattern);
            BoomTablePattern.prototype.inverseBGColors = function () {
                this.bgColors = this.bgColors ? this.bgColors.split("|").reverse().join("|") : "";
            };
            BoomTablePattern.prototype.inverseTransformValues = function () {
                this.transform_values = this.transform_values ? this.transform_values.split("|").reverse().join("|") : "";
            };
            BoomTablePattern.prototype.add_time_based_thresholds = function () {
                var new_time_based_threshold = new BoomTableTimeBasedThreshold();
                this.time_based_thresholds = this.time_based_thresholds || [];
                this.time_based_thresholds.push(new_time_based_threshold);
            };
            BoomTablePattern.prototype.remove_time_based_thresholds = function (index) {
                if (this.time_based_thresholds.length > 0) {
                    this.time_based_thresholds.splice(index, 1);
                }
            };
            BoomTablePattern.prototype.setUnitFormat = function (format) {
                this.format = format && format.value ? format.value : "none";
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbVRhYmxlUGF0dGVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvQm9vbVRhYmxlUGF0dGVybi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBTUk7b0JBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyw2QkFBNkIsQ0FBQztvQkFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7b0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsMkJBQTJCLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO29CQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsQ0FBQztnQkFDTCxrQ0FBQztZQUFELENBQUMsQUFiRCxJQWFDOztZQUVEO2dCQWtDSSwwQkFBWSxPQUFZO29CQWpDaEIsb0JBQWUsR0FBVyxHQUFHLENBQUM7b0JBa0NsQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsZUFBZSxFQUFFO3dCQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7cUJBQ2xEO29CQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO29CQUNwRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztvQkFDM0gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUN4RyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFB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QUFnQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxNQUFNO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9vbVRhYmxlVGltZUJhc2VkVGhyZXNob2xkIHtcclxuICAgIHB1YmxpYyBlbmFibGVkRGF5czogU3RyaW5nO1xyXG4gICAgcHVibGljIGZyb206IFN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgdGhyZXNob2xkOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgdG86IFN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZERheXMgPSBcIlN1bixNb24sVHVlLFdlZCxUaHUsRnJpLFNhdFwiO1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IFwiMDAwMFwiO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiRWFybHkgbW9ybmluZyBvZiBldmVyeWRheVwiO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gXCI3MCw5MFwiO1xyXG4gICAgICAgIHRoaXMudG8gPSBcIjA1MzBcIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQm9vbVRhYmxlUGF0dGVybiB7XHJcbiAgICBwcml2YXRlIHJvd19jb2xfd3JhcHBlcjogU3RyaW5nID0gXCJfXCI7XHJcbiAgICBwdWJsaWMgYmdDb2xvcnM6IFN0cmluZztcclxuICAgIHB1YmxpYyBiZ0NvbG9yc19vdmVycmlkZXM6IFN0cmluZztcclxuICAgIHB1YmxpYyBjbGlja2FibGVfY2VsbHNfbGluazogU3RyaW5nO1xyXG4gICAgcHVibGljIGNvbF9uYW1lOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVjaW1hbHM6IE51bWJlcjtcclxuICAgIHB1YmxpYyBkZWxpbWl0ZXI6IFN0cmluZztcclxuICAgIHB1YmxpYyBlbmFibGVfYmdDb2xvcjogQm9vbGVhbjtcclxuICAgIHB1YmxpYyBlbmFibGVfYmdDb2xvcl9vdmVycmlkZXM6IEJvb2xlYW47XHJcbiAgICBwdWJsaWMgZW5hYmxlX2NsaWNrYWJsZV9jZWxsczogQm9vbGVhbjtcclxuICAgIHB1YmxpYyBlbmFibGVfdGltZV9iYXNlZF90aHJlc2hvbGRzOiBCb29sZWFuO1xyXG4gICAgcHVibGljIGVuYWJsZV90cmFuc2Zvcm06IEJvb2xlYW47XHJcbiAgICBwdWJsaWMgZW5hYmxlX3RyYW5zZm9ybV9vdmVycmlkZXM6IEJvb2xlYW47XHJcbiAgICBwdWJsaWMgZmlsdGVyOiB7XHJcbiAgICAgICAgdmFsdWVfYWJvdmU6IFN0cmluZztcclxuICAgICAgICB2YWx1ZV9iZWxvdzogU3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBmb3JtYXQ6IFN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgbnVsbF9jb2xvcjogU3RyaW5nO1xyXG4gICAgcHVibGljIG51bGxfdmFsdWU6IFN0cmluZztcclxuICAgIHB1YmxpYyBwYXR0ZXJuOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgcm93X25hbWU6IFN0cmluZztcclxuICAgIHB1YmxpYyB0aHJlc2hvbGRzOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgdGltZV9iYXNlZF90aHJlc2hvbGRzOiBCb29tVGFibGVUaW1lQmFzZWRUaHJlc2hvbGRbXTtcclxuICAgIHB1YmxpYyB0cmFuc2Zvcm1fdmFsdWVzOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtX3ZhbHVlc19vdmVycmlkZXM6IFN0cmluZztcclxuICAgIHB1YmxpYyB2YWx1ZU5hbWU6IFN0cmluZztcclxuICAgIHB1YmxpYyBpbnZlcnNlQkdDb2xvcnM7XHJcbiAgICBwdWJsaWMgaW52ZXJzZVRyYW5zZm9ybVZhbHVlcztcclxuICAgIHB1YmxpYyBhZGRfdGltZV9iYXNlZF90aHJlc2hvbGRzO1xyXG4gICAgcHVibGljIHJlbW92ZV90aW1lX2Jhc2VkX3RocmVzaG9sZHM7XHJcbiAgICBwdWJsaWMgc2V0VW5pdEZvcm1hdDtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucm93X2NvbF93cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm93X2NvbF93cmFwcGVyID0gb3B0aW9ucy5yb3dfY29sX3dyYXBwZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmdDb2xvcnMgPSBvcHRpb25zICYmIG9wdGlvbnMuYmdDb2xvcnMgPyBvcHRpb25zLmJnQ29sb3JzIDogXCJncmVlbnxvcmFuZ2V8cmVkXCI7XHJcbiAgICAgICAgdGhpcy5iZ0NvbG9yc19vdmVycmlkZXMgPSBvcHRpb25zICYmIG9wdGlvbnMuYmdDb2xvcnNfb3ZlcnJpZGVzID8gb3B0aW9ucy5iZ0NvbG9yc19vdmVycmlkZXMgOiBcIjAtPmdyZWVufDItPnJlZHwxLT55ZWxsb3dcIjtcclxuICAgICAgICB0aGlzLmNsaWNrYWJsZV9jZWxsc19saW5rID0gb3B0aW9ucyAmJiBvcHRpb25zLmNsaWNrYWJsZV9jZWxsc19saW5rID8gb3B0aW9ucy5jbGlja2FibGVfY2VsbHNfbGluayA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb2xfbmFtZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5jb2xfbmFtZSA/IG9wdGlvbnMuY29sX25hbWUgOiB0aGlzLnJvd19jb2xfd3JhcHBlciArIFwiMVwiICsgdGhpcy5yb3dfY29sX3dyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5kZWNpbWFscyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWNpbWFscyA/IG9wdGlvbnMuZGVjaW1hbHMgOiAyO1xyXG4gICAgICAgIHRoaXMuZGVsaW1pdGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlciA/IG9wdGlvbnMuZGVsaW1pdGVyIDogXCIuXCI7XHJcbiAgICAgICAgdGhpcy5lbmFibGVfYmdDb2xvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlX2JnQ29sb3Jfb3ZlcnJpZGVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmFibGVfY2xpY2thYmxlX2NlbGxzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmFibGVfdGltZV9iYXNlZF90aHJlc2hvbGRzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmFibGVfdHJhbnNmb3JtID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbmFibGVfdHJhbnNmb3JtX292ZXJyaWRlcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyID0ge1xyXG4gICAgICAgICAgICB2YWx1ZV9hYm92ZTogXCJcIixcclxuICAgICAgICAgICAgdmFsdWVfYmVsb3c6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZvcm1hdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JtYXQgPyBvcHRpb25zLmZvcm1hdCA6IFwibm9uZVwiO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5uYW1lID8gb3B0aW9ucy5uYW1lIDogXCJOZXcgUGF0dGVyblwiO1xyXG4gICAgICAgIHRoaXMubnVsbF9jb2xvciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5udWxsX2NvbG9yID8gb3B0aW9ucy5udWxsX2NvbG9yIDogXCJkYXJrcmVkXCI7XHJcbiAgICAgICAgdGhpcy5udWxsX3ZhbHVlID0gb3B0aW9ucyAmJiBvcHRpb25zLm51bGxfdmFsdWUgPyBvcHRpb25zLm51bGxfdmFsdWUgOiBcIk5vIGRhdGFcIjtcclxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBvcHRpb25zICYmIG9wdGlvbnMucGF0dGVybiA/IG9wdGlvbnMucGF0dGVybiA6IFwiXnNlcnZlci4qY3B1JFwiO1xyXG4gICAgICAgIHRoaXMucm93X25hbWUgPSBvcHRpb25zICYmIG9wdGlvbnMucm93X25hbWUgPyBvcHRpb25zLnJvd19uYW1lIDogdGhpcy5yb3dfY29sX3dyYXBwZXIgKyBcIjBcIiArIHRoaXMucm93X2NvbF93cmFwcGVyO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aHJlc2hvbGRzID8gb3B0aW9ucy50aHJlc2hvbGRzIDogXCI3MCw5MFwiO1xyXG4gICAgICAgIHRoaXMudGltZV9iYXNlZF90aHJlc2hvbGRzID0gW107XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1fdmFsdWVzID0gb3B0aW9ucyAmJiBvcHRpb25zLnRyYW5zZm9ybV92YWx1ZXMgPyBvcHRpb25zLnRyYW5zZm9ybV92YWx1ZXMgOiBcIl92YWx1ZV98X3ZhbHVlX3xfdmFsdWVfXCI7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1fdmFsdWVzX292ZXJyaWRlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy50cmFuc2Zvcm1fdmFsdWVzX292ZXJyaWRlcyA/IG9wdGlvbnMudHJhbnNmb3JtX3ZhbHVlc19vdmVycmlkZXMgOiBcIjAtPmRvd258MS0+dXBcIjtcclxuICAgICAgICB0aGlzLnZhbHVlTmFtZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy52YWx1ZU5hbWUgPyBvcHRpb25zLnZhbHVlTmFtZSA6IFwiYXZnXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJvb21UYWJsZVBhdHRlcm4ucHJvdG90eXBlLmludmVyc2VCR0NvbG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuYmdDb2xvcnMgPSB0aGlzLmJnQ29sb3JzID8gdGhpcy5iZ0NvbG9ycy5zcGxpdChcInxcIikucmV2ZXJzZSgpLmpvaW4oXCJ8XCIpIDogXCJcIjtcclxufTtcclxuXHJcbkJvb21UYWJsZVBhdHRlcm4ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1WYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybV92YWx1ZXMgPSB0aGlzLnRyYW5zZm9ybV92YWx1ZXMgPyB0aGlzLnRyYW5zZm9ybV92YWx1ZXMuc3BsaXQoXCJ8XCIpLnJldmVyc2UoKS5qb2luKFwifFwiKSA6IFwiXCI7XHJcbn07XHJcblxyXG5Cb29tVGFibGVQYXR0ZXJuLnByb3RvdHlwZS5hZGRfdGltZV9iYXNlZF90aHJlc2hvbGRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5ld190aW1lX2Jhc2VkX3RocmVzaG9sZCA9IG5ldyBCb29tVGFibGVUaW1lQmFzZWRUaHJlc2hvbGQoKTtcclxuICAgIHRoaXMudGltZV9iYXNlZF90aHJlc2hvbGRzID0gdGhpcy50aW1lX2Jhc2VkX3RocmVzaG9sZHMgfHwgW107XHJcbiAgICB0aGlzLnRpbWVfYmFzZWRfdGhyZXNob2xkcy5wdXNoKG5ld190aW1lX2Jhc2VkX3RocmVzaG9sZCk7XHJcbn07XHJcblxyXG5Cb29tVGFibGVQYXR0ZXJuLnByb3RvdHlwZS5yZW1vdmVfdGltZV9iYXNlZF90aHJlc2hvbGRzID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICBpZiAodGhpcy50aW1lX2Jhc2VkX3RocmVzaG9sZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMudGltZV9iYXNlZF90aHJlc2hvbGRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5Cb29tVGFibGVQYXR0ZXJuLnByb3RvdHlwZS5zZXRVbml0Rm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCkge1xyXG4gICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQgJiYgZm9ybWF0LnZhbHVlID8gZm9ybWF0LnZhbHVlIDogXCJub25lXCI7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gICAgQm9vbVRhYmxlUGF0dGVybixcclxuICAgIEJvb21UYWJsZVRpbWVCYXNlZFRocmVzaG9sZFxyXG59O1xyXG4iXX0=