<template lang="html">
  <section class="app-sidebar">
    <nav
      id="sidebar"
      :class="`sidebar sidebar-offcanvas ${actived ? 'active' : null} `"
    >
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image">
              <img
                alt="profile-image"
                src="https://www.bootstrapdash.com/demo/star-admin-vue/static/img/face4.d5afaa6.jpg"
              />

              <span class="online-status online"></span>
            </div>
            <div class="profile-name">
              <p class="name">Richard V.Welsh</p>
              <p class="designation">Manager</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <img
              class="menu-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="menu icon"
            />
            <span class="menu-title">Dashboard</span></router-link
          ></li
        >

        <li class="nav-item">
          <router-link class="nav-link" to="/widgets/"
            ><img
              class="menu-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="menu icon"
            /><span class="menu-title">Widgets</span></router-link
          ></li
        >
        <li class="nav-item">
          <span v-b-toggle="'sample-pages'" class="nav-link">
            <img
              class="menu-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="menu icon"
            /><span class="menu-title">Sample Pages</span
            ><i class="menu-arrow"></i>
          </span>
          <b-collapse id="sample-pages">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"
                ><router-link class="nav-link" to="/login/"
                  >login</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/register/"
                  >register</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/404/">404</router-link></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/500/">500</router-link></li
              >
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'ui-components'" class="nav-link">
            <img
              class="menu-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="menu icon"
            /><span class="menu-title">UI Components</span
            ><i class="menu-arrow"></i>
          </span>
          <b-collapse id="ui-components">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"
                ><router-link class="nav-link" to="/alerts/"
                  >Alerts</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/buttons/"
                  >Button</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/badges/"
                  >Badges</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/breadcrumbs/"
                  >Breadcrumbs</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/carousel/"
                  >Carousel</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/dropdowns/"
                  >Dropdowns</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/typography/"
                  >Typography</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/paginations/"
                  >Paginations</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/tooltips/"
                  >Tooltips</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/progress/"
                  >Progress</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/tabs/"
                  >Tabs</router-link
                ></li
              >
              <li class="nav-item"
                ><router-link class="nav-link" to="/modals/"
                  >Modals</router-link
                ></li
              >
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item"
          ><router-link class="nav-link" to="/tables/"
            ><img
              class="menu-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="menu icon"
            /><span class="menu-title">Tables</span></router-link
          ></li
        >
        <li class="nav-item"
          ><router-link class="nav-link" to="/icons/"
            ><img
              class="menu-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="menu icon"
            /><span class="menu-title">Icons</span></router-link
          ></li
        >
        <li class="nav-item"
          ><router-link class="nav-link" to="/forms/"
            ><img
              class="menu-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="menu icon"
            /><span class="menu-title">Forms</span></router-link
          ></li
        >
      </ul>
    </nav>
  </section>
</template>

<script lang="js">
export default {
  name: 'AppSidebar',
  props: {
   actived: {
      type: Boolean,
      default: false,
   }
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {
  position: fixed;
  width: 100%;
}

/* Sidebar */
.sidebar {
  min-height: 100vh;
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  padding-top: 50px;
  width: 255px;
  z-index: 11;
  transition: width 0.25s ease, background 0.25s ease;
}
.sidebar .nav {
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 50px;
}
.sidebar .nav .nav-item .collapse {
  z-index: 999;
}
.sidebar .nav .nav-item .collapse.show,
.sidebar .nav .nav-item .collapsing {
  background: #f1f6ff;
}
.sidebar .nav .nav-item .nav-link {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  padding: 1rem 1.875rem;
  white-space: nowrap;
  height: 52px;
  color: #4a4949;
}
.sidebar .nav .nav-item .nav-link[aria-expanded='true'] {
  background: #f1f6ff;
}
.sidebar .nav .nav-item .nav-link .menu-icon {
  margin-right: 1.25rem;
  width: 16px;
  line-height: 1;
}
.rtl .sidebar .nav .nav-item .nav-link .menu-icon {
  margin-right: 0;
  margin-left: 1.25rem;
}
.sidebar .nav .nav-item .nav-link i {
  color: #404852;
}
.sidebar .nav .nav-item .nav-link i.menu-arrow {
  margin-left: auto;
  margin-right: 0;
}
.sidebar .nav .nav-item .nav-link i.menu-arrow:before {
  content: '\F35D';
  font-family: 'Material Design Icons';
  font-size: 18px;
  line-height: 1;
  font-style: normal;
  vertical-align: middle;
  color: rgba(74, 73, 73, 0.5);
}
.sidebar .nav .nav-item .nav-link .menu-title {
  color: inherit;
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1;
  vertical-align: middle;
}
.sidebar .nav .nav-item .nav-link .badge {
  margin-left: auto;
}
.sidebar .nav .nav-item .nav-link:hover {
  color: #3d3c3c;
}
.sidebar .nav .nav-item.nav-profile {
  background: transparent;
}
.sidebar .nav .nav-item.nav-profile .nav-link {
  font-family: 'Poppins', sans-serif;
  display: block;
  height: auto;
  padding: 0 1.625rem 2.25rem 1.188rem;
}
.sidebar .nav .nav-item.nav-profile .profile-image {
  position: relative;
  width: 70px;
  height: 70px;
  margin: auto;
}
.sidebar .nav .nav-item.nav-profile .profile-image img {
  width: 70px;
  height: 70px;
  border-radius: 100%;
}
.sidebar .nav .nav-item.nav-profile .profile-name {
  margin-top: 0.75rem;
  text-align: center;
}
.rtl .sidebar .nav .nav-item.nav-profile .profile-name {
  margin-left: auto;
  margin-right: 0.75rem;
}
.sidebar .nav .nav-item.nav-profile .profile-name .designation,
.sidebar .nav .nav-item.nav-profile .profile-name .name {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0;
  line-height: 1.5;
  font-weight: 500;
}
.sidebar .nav .nav-item.nav-profile .profile-name .name {
  color: #404852;
}
.sidebar .nav .nav-item.nav-profile .profile-name .designation {
  color: #8d9498;
  font-size: 0.75rem;
}
.sidebar .nav .nav-item.nav-profile i {
  color: #ffffff;
  font-size: 1rem;
  margin-left: auto;
}
.sidebar .nav .nav-item.active > .nav-link {
  color: #1991eb;
}
.sidebar .nav .nav-item.active > .nav-link .menu-title,
.sidebar .nav .nav-item.active > .nav-link i {
  color: inherit;
}
.sidebar .nav:not(.sub-menu) > .nav-item:hover:not(.nav-profile) > .nav-link {
  background: #f1f6ff;
  color: #4a4949;
}
.sidebar .nav.sub-menu {
  margin-bottom: 0;
  padding: 0 0 0 3.25rem;
}
.sidebar .nav.sub-menu .nav-item .nav-link {
  color: #4a4949;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  line-height: 1;
  height: auto;
}
.sidebar .nav.sub-menu .nav-item .nav-link.active {
  color: #1991eb;
  background: transparent;
}
.sidebar .nav.sub-menu .nav-item .nav-link.active:before {
  background: #1991eb;
}
.sidebar .nav.sub-menu .nav-item:hover > .nav-link {
  background: initial;
  color: #000;
}
.sidebar .nav.sub-menu .nav-item:hover > .nav-link:before {
  background: #000;
}
.sidebar .nav .nav-item.purchase-button {
  text-align: center;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
.sidebar .nav .nav-item.purchase-button .nav-link {
  background-color: #d209fa;
  zoom: 1;
  color: #ffffff;
  text-align: center;
  display: block;
  font-weight: 500;
  border-radius: 4px;
  transition-duration: 0.3s;
  font-size: 14px;
}
.sidebar .nav .nav-item.purchase-button .nav-link:hover {
  background-color: #d209fa;
  zoom: 1;
}
.sidebar .nav .nav-item.purchase-button:hover .nav-link {
  background-color: #d209fa !important;
  color: #ffffff !important;
}
/* style for off-canvas menu*/
@media screen and (max-width: 991px) {
  .sidebar-offcanvas {
    position: fixed;
    max-height: calc(100vh - 58px);
    top: 58px;
    bottom: 0;
    overflow: auto;
    right: -255px;
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    -webkit-box-shadow: -5px 0 10px 0 #eee;
    box-shadow: -5px 0 10px 0 #eee;
  }
  .sidebar-offcanvas.active {
    right: 0;
  }
}
</style>
