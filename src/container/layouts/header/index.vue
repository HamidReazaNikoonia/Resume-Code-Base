<template lang="html">
  <b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
    <div
      class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"
    >
      <a class="navbar-brand brand-logo">
        LOGO
      </a>
      <a class="navbar-brand brand-logo-mini">
        LOGO
      </a>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <b-navbar-nav class="header-links d-none d-md-flex">
        <b-nav-item href="#"> <BaseIcon name="user" /> Gallery </b-nav-item>

        <b-nav-item href="#" active>
          <BaseIcon name="user" /> Inbox
        </b-nav-item>

        <b-nav-item href="#"> <BaseIcon name="user" /> Calendar </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="count-indicator">
              <BaseIcon name="user" />
              <span class="count">7</span>
            </div>
          </template>

          <b-dropdown-item class="preview-item" href="#">
            <p class="mb-0 font-weight-normal float-left"
              >You have 4 new notifications
            </p>
            <span class="badge badge-pill badge-warning">View all</span>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-success">
                <BaseIcon name="sync" />
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium"
                >Application Error</h6
              >
              <p class="font-weight-light small-text">
                Just now
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-warning">
                <BaseIcon name="user" />
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium">Settings</h6>
              <p class="font-weight-light small-text">
                Private message
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item" href="#">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-info">
                <BaseIcon name="user" />
              </div>
            </div>
            <div class="preview-item-content">
              <h6 class="preview-subject font-weight-medium"
                >New user registration</h6
              >
              <p class="font-weight-light small-text">
                2 days ago
              </p>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="count-indicator">
              <BaseIcon name="user" />
              <span class="count">7</span>
            </div>
          </template>
          <b-dropdown-item
            class="preview-item flex-wrap flex-sm-nowrap"
            href="#"
          >
            <p class="mb-0 font-weight-normal float-left"
              >You have 4 unread mails</p
            >
            <span class="badge badge-pill badge-warning">View all</span>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
                alt="image"
                class="img-sm profile-pic"
              />
            </div>
            <div class="preview-item-content flex-grow py-2">
              <p class="preview-subject ellipsis font-weight-medium text-dark"
                >Marian Garner
              </p>
              <p class="font-weight-light small-text">
                The meeting is cancelled
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
                alt="image"
                class="img-sm profile-pic"
              />
            </div>
            <div class="preview-item-content flex-grow py-2">
              <p class="preview-subject ellipsis font-weight-medium text-dark"
                >David Grey</p
              >
              <p class="font-weight-light small-text">
                The meeting is cancelled
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
                alt="image"
                class="img-sm profile-pic"
              />
            </div>
            <div class="preview-item-content flex-grow py-2">
              <p class="preview-subject ellipsis font-weight-medium text-dark"
                >Travis Jenkins</p
              >
              <p class="font-weight-light small-text">
                The meeting is cancelled
              </p>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUYxREJGQTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUYxREJGOTZBQ0MxMUU3QkRFNDlCOTA5RUQ2Q0ZDOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiMjUwZGUwLWQ1OTctNDg3Zi04MjFhLTEyZTJmZGU0ZDJjMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTVCNUZBQURGQzJFMjExQTkyOUREMkFDRTk1M0U5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYr5EcAAALYSURBVHjaZFJLSFRRGP7OYx7qiDpZWIGrwKyFSQkuAomCxFKjWkluekJUmwhbFNkqdKejULioNrWICiTEoAcVtCjpAUEP8TVqOpNjM87TuXPP6T93NATPvf899/znfN/5/geLfqyDGYxh3dAa//c4Z5CcQ0oywclpNmgWVlUimmnvC13aJNczwDlowMKABc0E5g5jnpveanI2IRNrHh3P1AeWOvUncfSgNGeMAkZP/lbm3Mw4WyNXC/rUkDWDixYoVRMJToiRmQLck7cx7W246UXijaPM7RLwugWY4GvkwU3zbppbaXmYpO4gchaNLGF6/Be+JHbicel9LLq2f/WqeLcByKICN4TkKwS6gD71ZEfImsi1zVFH+5l4GuOTc4jMT+ObqxWDGwaQ4n54dPwyIVM2BEUk2BaKs5ZALUTQSFa5mjdDYi9bCE7MY3o2BJVZwgffBQwXd9MRAZdK9WvGXhoiv/gDmUhmj5P6W5TgQlMck2gphZPI8PwiJoNhpBJx8mu8KOnC26IrkDoDoZfH6cYbWufzetbfA2kr3UvIV8TRxxRrMJLClJe5+QXEKTSJZSjpw1NfLz572yisJJhWRnoHg44ktQ/NxY+wv2gYLDZS56RFcIFUOnPx99xCz99onCkK1YM0FuwKPHAFMFvWQkSJldrgIf20WVSjjSKEns0n4ZeRfPuY1jBKfvycCkQWl94bdR5uYYrtQp+6i+/WHnjs2GonhglxVVGestqDU2X9qHDNwdIuQ8aRSmUQnAnDVoo6gA9KbmMiXIje0dPJEK/KulUMdi7n9CJj+loO7qAFF9pL7mCf7zlSutC5xWmsXM42LeSUkA4PxZICT2YPvYsVVdd6kDymtQ7lrGXa1kNZ7R4o5RFcL+/AGX/AUaQUc6LLk9mKFtrpBsrJWNZ2nzjXmG4s31o+SgV6Rt69tpV9TcDOSjmGrorzOFA8jDQpWkE5458AAwCfgzImZyGq7QAAAABJRU5ErkJggg=="
              alt="profile image"
              class="img-xs rounded-circle"
            />
          </template>
          <b-dropdown-item href="#" class="preview-item flex-wrap"
            >Profile</b-dropdown-item
          >
          <b-dropdown-item href="#" class="preview-item flex-wrap"
            >Signout</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <button
        class="navbar-toggler navbar-toggler-right align-self-center"
        type="button"
        @click="collapedMobileSidebar"
      >
        <BaseIcon name="sync" />
      </button>
    </div>
  </b-navbar>
</template>

<script lang="js">
export default {
  name: 'AppHeader',
  methods: {
    collapedMobileSidebar() {
      // document.querySelector('.sidebar').classList.toggle('active')
    }
  }
}
</script>

<style lang="scss">
/* Sidebar */
.sidebar {
  min-height: calc(100vh - 58px);
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  width: 255px;
  z-index: 11;
  transition: width 0.25s ease, background 0.25s ease;
  -webkit-transition: width 0.25s ease, background 0.25s ease;
  -moz-transition: width 0.25s ease, background 0.25s ease;
  -ms-transition: width 0.25s ease, background 0.25s ease;
}
.sidebar .nav {
  overflow: hidden;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
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
  display: -webkit-box;
  display: -ms-flexbox;
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
  *zoom: 1;
  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FFD209FA', endColorstr='#FF4F81D4');
  background-image: -owg-linear-gradient(left, #d209fa 1%, #4f81d4 100%);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(1%, #d209fa),
    to(#4f81d4)
  );
  background-image: linear-gradient(left, #d209fa 1%, #4f81d4 100%);
  color: #ffffff;
  text-align: center;
  display: block;
  font-weight: 500;
  border-radius: 4px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  font-size: 14px;
}
.sidebar .nav .nav-item.purchase-button .nav-link:hover {
  background-color: #d209fa;
  *zoom: 1;
  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FFD209FA', endColorstr='#FF4F81D4');
  background-image: -owg-linear-gradient(left, #d209fa 1%, #4f81d4 100%);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(1%, #d209fa),
    to(#4f81d4)
  );
  background-image: linear-gradient(left, #d209fa 1%, #4f81d4 100%);
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
/* Navbar */
.navbar {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(88deg, #318be3, #04befe);
  padding: 0 !important;
  transition: background 0.25s ease;
  -webkit-transition: background 0.25s ease;
  -moz-transition: background 0.25s ease;
  -ms-transition: background 0.25s ease;
}
.navbar .navbar-brand-wrapper {
  transition: width 0.25s ease, background 0.25s ease;
  -webkit-transition: width 0.25s ease, background 0.25s ease;
  -moz-transition: width 0.25s ease, background 0.25s ease;
  -ms-transition: width 0.25s ease, background 0.25s ease;
  background: #ffffff;
  width: 255px;
  height: 58px;
}
@media (max-width: 991px) {
  .navbar .navbar-brand-wrapper {
    width: 55px;
  }
}
.navbar .navbar-brand-wrapper .navbar-brand {
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 48px;
  margin-right: 0;
  padding: 0.25rem 0;
}
.navbar .navbar-brand-wrapper .navbar-brand:active,
.navbar .navbar-brand-wrapper .navbar-brand:focus,
.navbar .navbar-brand-wrapper .navbar-brand:hover {
  color: #424546;
}
.navbar .navbar-brand-wrapper .navbar-brand img {
  width: calc(255px - 130px);
  max-width: 100%;
  height: 28px;
  margin: auto;
  vertical-align: middle;
}
@media (max-width: 991px) {
  .navbar .navbar-brand-wrapper .navbar-brand {
    display: none;
  }
}
.navbar .navbar-brand-wrapper .brand-logo-mini {
  display: none;
}
@media (max-width: 991px) {
  .navbar .navbar-brand-wrapper .brand-logo-mini {
    display: block;
  }
}
.navbar .navbar-brand-wrapper .brand-logo-mini img {
  width: calc(70px - 50px);
  max-width: 100%;
  height: 28px;
  margin: auto;
}
.navbar .navbar-menu-wrapper {
  padding: 0 15px;
  height: 58px;
  width: calc(100% - 255px);
}
@media (max-width: 991px) {
  .navbar .navbar-menu-wrapper {
    width: calc(100% - 55px);
  }
}
.navbar .navbar-menu-wrapper .navbar-nav {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
.navbar .navbar-menu-wrapper .navbar-nav .nav-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0.5rem;
}
.navbar .navbar-menu-wrapper .navbar-nav .nav-item .nav-link {
  color: #ffffff;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .nav-link.dropdown-toggle::after {
  display: none;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .nav-link.dropdown-toggle
  .count-indicator {
  position: relative;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .nav-link.dropdown-toggle
  .count-indicator
  .icon {
  font-size: 21px;
  margin-right: 0;
  vertical-align: middle;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .nav-link.dropdown-toggle
  .count-indicator
  .count {
  position: absolute;
  left: 50%;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: #ff0017;
  font-size: 75%;
  top: -6px;
  font-weight: 600;
  line-height: 1rem;
  border: none;
  text-align: center;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .dropdown-menu {
  -webkit-box-shadow: 0 0 13px -3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 13px -3px rgba(0, 0, 0, 0.1);
  position: absolute;
  font-size: 0.9rem;
  margin-top: 0;
  right: 0;
  left: auto;
  top: 58px;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .dropdown-menu
  .dropdown-item {
  border-bottom: 1px solid #b2b8bc;
  margin-bottom: 0;
  padding: 11px 30px;
  border-bottom: 1px solid #f3f3f3;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .dropdown-menu
  .dropdown-item:last-child {
  border-bottom: none;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .dropdown-menu
  .dropdown-item
  i {
  font-size: 17px;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .dropdown-menu
  .dropdown-item
  .ellipsis {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .dropdown-menu
  .dropdown-item
  .preview-icon {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav
  .nav-item.b-nav-dropdown
  .dropdown-menu
  .dropdown-item
  .small-text {
  font-size: 0.75rem;
}
@media (max-width: 991px) {
  .navbar .navbar-menu-wrapper .navbar-nav .nav-item.b-nav-dropdown {
    position: static;
  }
  .navbar
    .navbar-menu-wrapper
    .navbar-nav
    .nav-item.b-nav-dropdown
    .dropdown-menu {
    left: 20px;
    right: 20px;
    top: 58px;
    width: calc(100% - 40px);
  }
}
.navbar .navbar-menu-wrapper .navbar-nav.header-links {
  height: 58px;
  padding-left: 2%;
}
.navbar .navbar-menu-wrapper .navbar-nav.header-links .nav-item {
  margin: 0;
}
.navbar .navbar-menu-wrapper .navbar-nav.header-links .nav-item .nav-link {
  height: 58px;
  font-size: 0.875rem;
  padding: 16px 25px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.navbar
  .navbar-menu-wrapper
  .navbar-nav.header-links
  .nav-item
  .nav-link.active {
  background: rgba(255, 255, 255, 0.3);
}
.navbar .navbar-menu-wrapper .navbar-nav.header-links .nav-item .nav-link i {
  margin-right: 10px;
  font-size: inherit;
}
.rtl
  .navbar
  .navbar-menu-wrapper
  .navbar-nav.header-links
  .nav-item
  .nav-link
  i {
  margin-right: 0;
  margin-left: 10px;
}
.navbar .navbar-menu-wrapper .navbar-toggler-right {
  border: 0;
  padding: 0 0.5rem;
}
.navbar .navbar-menu-wrapper .navbar-toggler-right span {
  color: #ffffff;
}
@media (max-width: 991px) {
  .navbar .navbar-menu-wrapper .navbar-toggler-right {
    display: block;
  }
}
.navbar.fixed-top + .page-body-wrapper {
  padding-top: 58px;
}
</style>
