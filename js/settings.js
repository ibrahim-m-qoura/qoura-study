<!-- ANALYTICS -->
<section class="page" id="page-analytics">
  <div class="page-header">
    <h2 class="page-title">Analytics</h2>
    <p class="page-subtitle">Track your study habits over time</p>
  </div>

  <!-- إحصائيات سريعة -->
  <div class="dashboard-grid" style="margin-bottom: 20px;">
    <div class="glass card metric-card">
      <div class="metric-label">Total Focus</div>
      <div class="metric-value"><span id="totalFocusAllTime">0</span><small>h</small></div>
    </div>
    <div class="glass card metric-card">
      <div class="metric-label">This Month</div>
      <div class="metric-value"><span id="totalFocusMonth">0</span><small>h</small></div>
    </div>
    <div class="glass card metric-card">
      <div class="metric-label">This Week</div>
      <div class="metric-value"><span id="totalFocusWeek">0</span><small>h</small></div>
    </div>
    <div class="glass card metric-card">
      <div class="metric-label">Avg Session</div>
      <div class="metric-value"><span id="avgSession">0</span><small>m</small></div>
    </div>
  </div>

  <!-- الخط البياني -->
  <div class="glass card" style="margin-bottom: 20px; padding: 20px;">
    <h3 style="margin-top:0; font-size:16px; margin-bottom: 16px;">Focus Trend</h3>
    <div style="position: relative; height: 250px; width: 100%;">
      <canvas id="focusChart"></canvas>
    </div>
  </div>

  <!-- التقويم (Calendar Heatmap) -->
  <div class="glass card">
    <h3 style="margin-top:0; font-size:16px; margin-bottom: 16px;">Study Consistency</h3>
    <div id="calendarHeatmap" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center;">
      <!-- سيتم توليده بالجافاسكريبت -->
    </div>
    <div style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; margin-top: 12px; font-size: 11px; color: var(--muted);">
      <span>Less</span>
      <div style="width: 12px; height: 12px; border-radius: 3px; background: rgba(130, 157, 135, 0.1);"></div>
      <div style="width: 12px; height: 12px; border-radius: 3px; background: rgba(130, 157, 135, 0.4);"></div>
      <div style="width: 12px; height: 12px; border-radius: 3px; background: rgba(130, 157, 135, 0.7);"></div>
      <div style="width: 12px; height: 12px; border-radius: 3px; background: var(--accent);"></div>
      <span>More</span>
    </div>
  </div>
</section>
