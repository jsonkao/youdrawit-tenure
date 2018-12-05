const TABLES = {"HUM-NE": [{"Year": 2007.0, "% Women": 0.6557, "Women": 80.0, "% Men": 0.3443, "Men": 42.0, "Total": 122.0}, {"Year": 2008.0, "% Women": 0.64, "Women": 80.0, "% Men": 0.36, "Men": 45.0, "Total": 125.0}, {"Year": 2009.0, "% Women": 0.5982, "Women": 67.0, "% Men": 0.4018, "Men": 45.0, "Total": 112.0}, {"Year": 2010.0, "% Women": 0.6471, "Women": 77.0, "% Men": 0.3529, "Men": 42.0, "Total": 119.0}, {"Year": 2011.0, "% Women": 0.6406, "Women": 82.0, "% Men": 0.3594, "Men": 46.0, "Total": 128.0}, {"Year": 2012.0, "% Women": 0.635, "Women": 87.0, "% Men": 0.365, "Men": 50.0, "Total": 137.0}, {"Year": 2013.0, "% Women": 0.6395, "Women": 94.0, "% Men": 0.3605, "Men": 53.0, "Total": 147.0}, {"Year": 2014.0, "% Women": 0.6481, "Women": 105.0, "% Men": 0.3519, "Men": 57.0, "Total": 162.0}, {"Year": 2015.0, "% Women": 0.6074, "Women": 99.0, "% Men": 0.3926, "Men": 64.0, "Total": 163.0}, {"Year": 2016.0, "% Women": 0.5523, "Women": 95.0, "% Men": 0.4477, "Men": 77.0, "Total": 172.0}, {"Year": 2017.0, "% Women": 0.6154, "Women": 104.0, "% Men": 0.3846, "Men": 65.0, "Total": 169.0}], "HUM-EL": [{"Year": 2007.0, "% Women": 0.5059, "Women": 43.0, "% Men": 0.4941, "Men": 42.0, "Total": 85.0}, {"Year": 2008.0, "% Women": 0.4684, "Women": 37.0, "% Men": 0.5316, "Men": 42.0, "Total": 79.0}, {"Year": 2009.0, "% Women": 0.4839, "Women": 30.0, "% Men": 0.5161, "Men": 32.0, "Total": 62.0}, {"Year": 2010.0, "% Women": 0.4828, "Women": 28.0, "% Men": 0.5172, "Men": 30.0, "Total": 58.0}, {"Year": 2011.0, "% Women": 0.4727, "Women": 26.0, "% Men": 0.5273, "Men": 29.0, "Total": 55.0}, {"Year": 2012.0, "% Women": 0.4259, "Women": 23.0, "% Men": 0.5741, "Men": 31.0, "Total": 54.0}, {"Year": 2013.0, "% Women": 0.4118, "Women": 21.0, "% Men": 0.5882, "Men": 30.0, "Total": 51.0}, {"Year": 2014.0, "% Women": 0.3636, "Women": 16.0, "% Men": 0.6364, "Men": 28.0, "Total": 44.0}, {"Year": 2015.0, "% Women": 0.4286, "Women": 21.0, "% Men": 0.5714, "Men": 28.0, "Total": 49.0}, {"Year": 2016.0, "% Women": 0.4528, "Women": 24.0, "% Men": 0.5472, "Men": 29.0, "Total": 53.0}, {"Year": 2017.0, "% Women": 0.4561, "Women": 26.0, "% Men": 0.5439, "Men": 31.0, "Total": 57.0}], "HUM-TE": [{"Year": 2007.0, "% Women": 0.3607, "Women": 44.0, "% Men": 0.6393, "Men": 78.0, "Total": 122.0}, {"Year": 2008.0, "% Women": 0.3835, "Women": 51.0, "% Men": 0.6165, "Men": 82.0, "Total": 133.0}, {"Year": 2009.0, "% Women": 0.3759, "Women": 53.0, "% Men": 0.6241, "Men": 88.0, "Total": 141.0}, {"Year": 2010.0, "% Women": 0.4, "Women": 54.0, "% Men": 0.6, "Men": 81.0, "Total": 135.0}, {"Year": 2011.0, "% Women": 0.3929, "Women": 55.0, "% Men": 0.6071, "Men": 85.0, "Total": 140.0}, {"Year": 2012.0, "% Women": 0.3944, "Women": 56.0, "% Men": 0.6056, "Men": 86.0, "Total": 142.0}, {"Year": 2013.0, "% Women": 0.3946, "Women": 58.0, "% Men": 0.6054, "Men": 89.0, "Total": 147.0}, {"Year": 2014.0, "% Women": 0.3907, "Women": 59.0, "% Men": 0.6093, "Men": 92.0, "Total": 151.0}, {"Year": 2015.0, "% Women": 0.3947, "Women": 60.0, "% Men": 0.6053, "Men": 92.0, "Total": 152.0}, {"Year": 2016.0, "% Women": 0.4013, "Women": 61.0, "% Men": 0.5987, "Men": 91.0, "Total": 152.0}, {"Year": 2017.0, "% Women": 0.4183, "Women": 64.0, "% Men": 0.5817, "Men": 89.0, "Total": 153.0}], "NAT-NE": [{"Year": 2007.0, "% Women": 0.3636, "Women": 8.0, "% Men": 0.6364, "Men": 14.0, "Total": 22.0}, {"Year": 2008.0, "% Women": 0.3684, "Women": 7.0, "% Men": 0.6316, "Men": 12.0, "Total": 19.0}, {"Year": 2009.0, "% Women": 0.5, "Women": 10.0, "% Men": 0.5, "Men": 10.0, "Total": 20.0}, {"Year": 2010.0, "% Women": 0.5217, "Women": 12.0, "% Men": 0.4783, "Men": 11.0, "Total": 23.0}, {"Year": 2011.0, "% Women": 0.6563, "Women": 21.0, "% Men": 0.3438, "Men": 11.0, "Total": 32.0}, {"Year": 2012.0, "% Women": 0.5676, "Women": 21.0, "% Men": 0.4324, "Men": 16.0, "Total": 37.0}, {"Year": 2013.0, "% Women": 0.5946, "Women": 22.0, "% Men": 0.4054, "Men": 15.0, "Total": 37.0}, {"Year": 2014.0, "% Women": 0.5833, "Women": 21.0, "% Men": 0.4167, "Men": 15.0, "Total": 36.0}, {"Year": 2015.0, "% Women": 0.5405, "Women": 20.0, "% Men": 0.4595, "Men": 17.0, "Total": 37.0}, {"Year": 2016.0, "% Women": 0.5192, "Women": 27.0, "% Men": 0.4808, "Men": 25.0, "Total": 52.0}, {"Year": 2017.0, "% Women": 0.5833, "Women": 28.0, "% Men": 0.4167, "Men": 20.0, "Total": 48.0}], "NAT-EL": [{"Year": 2007.0, "% Women": 0.2833, "Women": 17.0, "% Men": 0.7167, "Men": 43.0, "Total": 60.0}, {"Year": 2008.0, "% Women": 0.2656, "Women": 17.0, "% Men": 0.7344, "Men": 47.0, "Total": 64.0}, {"Year": 2009.0, "% Women": 0.2969, "Women": 19.0, "% Men": 0.7031, "Men": 45.0, "Total": 64.0}, {"Year": 2010.0, "% Women": 0.2985, "Women": 20.0, "% Men": 0.7015, "Men": 47.0, "Total": 67.0}, {"Year": 2011.0, "% Women": 0.3239, "Women": 23.0, "% Men": 0.6761, "Men": 48.0, "Total": 71.0}, {"Year": 2012.0, "% Women": 0.2609, "Women": 18.0, "% Men": 0.7391, "Men": 51.0, "Total": 69.0}, {"Year": 2013.0, "% Women": 0.2113, "Women": 15.0, "% Men": 0.7887, "Men": 56.0, "Total": 71.0}, {"Year": 2014.0, "% Women": 0.1452, "Women": 9.0, "% Men": 0.8548, "Men": 53.0, "Total": 62.0}, {"Year": 2015.0, "% Women": 0.1852, "Women": 10.0, "% Men": 0.8148, "Men": 44.0, "Total": 54.0}, {"Year": 2016.0, "% Women": 0.2353, "Women": 12.0, "% Men": 0.7647, "Men": 39.0, "Total": 51.0}, {"Year": 2017.0, "% Women": 0.22, "Women": 11.0, "% Men": 0.78, "Men": 39.0, "Total": 50.0}], "NAT-TE": [{"Year": 2007.0, "% Women": 0.125, "Women": 17.0, "% Men": 0.875, "Men": 119.0, "Total": 136.0}, {"Year": 2008.0, "% Women": 0.1397, "Women": 19.0, "% Men": 0.8603, "Men": 117.0, "Total": 136.0}, {"Year": 2009.0, "% Women": 0.1357, "Women": 19.0, "% Men": 0.8643, "Men": 121.0, "Total": 140.0}, {"Year": 2010.0, "% Women": 0.1429, "Women": 20.0, "% Men": 0.8571, "Men": 120.0, "Total": 140.0}, {"Year": 2011.0, "% Women": 0.1469, "Women": 21.0, "% Men": 0.8531, "Men": 122.0, "Total": 143.0}, {"Year": 2012.0, "% Women": 0.1622, "Women": 24.0, "% Men": 0.8378, "Men": 124.0, "Total": 148.0}, {"Year": 2013.0, "% Women": 0.1935, "Women": 30.0, "% Men": 0.8065, "Men": 125.0, "Total": 155.0}, {"Year": 2014.0, "% Women": 0.2099, "Women": 34.0, "% Men": 0.7901, "Men": 128.0, "Total": 162.0}, {"Year": 2015.0, "% Women": 0.205, "Women": 33.0, "% Men": 0.795, "Men": 128.0, "Total": 161.0}, {"Year": 2016.0, "% Women": 0.2061, "Women": 34.0, "% Men": 0.7939, "Men": 131.0, "Total": 165.0}, {"Year": 2017.0, "% Women": 0.2139, "Women": 37.0, "% Men": 0.7861, "Men": 136.0, "Total": 173.0}], "SOC-NE": [{"Year": 2007.0, "% Women": 0.45, "Women": 9.0, "% Men": 0.55, "Men": 11.0, "Total": 20.0}, {"Year": 2008.0, "% Women": 0.5263, "Women": 10.0, "% Men": 0.4737, "Men": 9.0, "Total": 19.0}, {"Year": 2009.0, "% Women": 0.4706, "Women": 8.0, "% Men": 0.5294, "Men": 9.0, "Total": 17.0}, {"Year": 2010.0, "% Women": 0.4762, "Women": 10.0, "% Men": 0.5238, "Men": 11.0, "Total": 21.0}, {"Year": 2011.0, "% Women": 0.5, "Women": 11.0, "% Men": 0.5, "Men": 11.0, "Total": 22.0}, {"Year": 2012.0, "% Women": 0.6, "Women": 12.0, "% Men": 0.4, "Men": 8.0, "Total": 20.0}, {"Year": 2013.0, "% Women": 0.5588, "Women": 19.0, "% Men": 0.4412, "Men": 15.0, "Total": 34.0}, {"Year": 2014.0, "% Women": 0.4848, "Women": 16.0, "% Men": 0.5152, "Men": 17.0, "Total": 33.0}, {"Year": 2015.0, "% Women": 0.4857, "Women": 17.0, "% Men": 0.5143, "Men": 18.0, "Total": 35.0}, {"Year": 2016.0, "% Women": 0.4545, "Women": 20.0, "% Men": 0.5455, "Men": 24.0, "Total": 44.0}, {"Year": 2017.0, "% Women": 0.5, "Women": 19.0, "% Men": 0.5, "Men": 19.0, "Total": 38.0}], "SOC-EL": [{"Year": 2007.0, "% Women": 0.5952, "Women": 25.0, "% Men": 0.4048, "Men": 17.0, "Total": 42.0}, {"Year": 2008.0, "% Women": 0.5417, "Women": 26.0, "% Men": 0.4583, "Men": 22.0, "Total": 48.0}, {"Year": 2009.0, "% Women": 0.5652, "Women": 26.0, "% Men": 0.4348, "Men": 20.0, "Total": 46.0}, {"Year": 2010.0, "% Women": 0.5556, "Women": 25.0, "% Men": 0.4444, "Men": 20.0, "Total": 45.0}, {"Year": 2011.0, "% Women": 0.551, "Women": 27.0, "% Men": 0.449, "Men": 22.0, "Total": 49.0}, {"Year": 2012.0, "% Women": 0.5102, "Women": 25.0, "% Men": 0.4898, "Men": 24.0, "Total": 49.0}, {"Year": 2013.0, "% Women": 0.4667, "Women": 21.0, "% Men": 0.5333, "Men": 24.0, "Total": 45.0}, {"Year": 2014.0, "% Women": 0.525, "Women": 21.0, "% Men": 0.475, "Men": 19.0, "Total": 40.0}, {"Year": 2015.0, "% Women": 0.4706, "Women": 16.0, "% Men": 0.5294, "Men": 18.0, "Total": 34.0}, {"Year": 2016.0, "% Women": 0.4054, "Women": 15.0, "% Men": 0.5946, "Men": 22.0, "Total": 37.0}, {"Year": 2017.0, "% Women": 0.4286, "Women": 18.0, "% Men": 0.5714, "Men": 24.0, "Total": 42.0}], "SOC-TE": [{"Year": 2007.0, "% Women": 0.2389, "Women": 27.0, "% Men": 0.7611, "Men": 86.0, "Total": 113.0}, {"Year": 2008.0, "% Women": 0.2564, "Women": 30.0, "% Men": 0.7436, "Men": 87.0, "Total": 117.0}, {"Year": 2009.0, "% Women": 0.2541, "Women": 31.0, "% Men": 0.7459, "Men": 91.0, "Total": 122.0}, {"Year": 2010.0, "% Women": 0.2645, "Women": 32.0, "% Men": 0.7355, "Men": 89.0, "Total": 121.0}, {"Year": 2011.0, "% Women": 0.2459, "Women": 30.0, "% Men": 0.7541, "Men": 92.0, "Total": 122.0}, {"Year": 2012.0, "% Women": 0.25, "Women": 30.0, "% Men": 0.75, "Men": 90.0, "Total": 120.0}, {"Year": 2013.0, "% Women": 0.2541, "Women": 31.0, "% Men": 0.7459, "Men": 91.0, "Total": 122.0}, {"Year": 2014.0, "% Women": 0.2742, "Women": 34.0, "% Men": 0.7258, "Men": 90.0, "Total": 124.0}, {"Year": 2015.0, "% Women": 0.28, "Women": 35.0, "% Men": 0.72, "Men": 90.0, "Total": 125.0}, {"Year": 2016.0, "% Women": 0.2891, "Women": 37.0, "% Men": 0.7109, "Men": 91.0, "Total": 128.0}, {"Year": 2017.0, "% Women": 0.2977, "Women": 39.0, "% Men": 0.7023, "Men": 92.0, "Total": 131.0}], "ENG-NE": [{"Year": 2007.0, "% Women": 0.0, "Women": 0.0, "% Men": 1.0, "Men": 5.0, "Total": 5.0}, {"Year": 2008.0, "% Women": 0.0, "Women": 0.0, "% Men": 1.0, "Men": 4.0, "Total": 4.0}, {"Year": 2009.0, "% Women": 0.0, "Women": 0.0, "% Men": 1.0, "Men": 5.0, "Total": 5.0}, {"Year": 2010.0, "% Women": 0.0, "Women": 0.0, "% Men": 1.0, "Men": 12.0, "Total": 12.0}, {"Year": 2011.0, "% Women": 0.0, "Women": 0.0, "% Men": 1.0, "Men": 12.0, "Total": 12.0}, {"Year": 2012.0, "% Women": 0.0, "Women": 0.0, "% Men": 1.0, "Men": 14.0, "Total": 14.0}, {"Year": 2013.0, "% Women": 0.0, "Women": 0.0, "% Men": 1.0, "Men": 18.0, "Total": 18.0}, {"Year": 2014.0, "% Women": 0.08, "Women": 2.0, "% Men": 0.92, "Men": 23.0, "Total": 25.0}, {"Year": 2015.0, "% Women": 0.1304, "Women": 3.0, "% Men": 0.8696, "Men": 20.0, "Total": 23.0}, {"Year": 2016.0, "% Women": 0.1304, "Women": 3.0, "% Men": 0.8696, "Men": 20.0, "Total": 23.0}, {"Year": 2017.0, "% Women": 0.1111, "Women": 3.0, "% Men": 0.8889, "Men": 24.0, "Total": 27.0}], "ENG-EL": [{"Year": 2007.0, "% Women": 0.2075, "Women": 11.0, "% Men": 0.7925, "Men": 42.0, "Total": 53.0}, {"Year": 2008.0, "% Women": 0.1818, "Women": 10.0, "% Men": 0.8182, "Men": 45.0, "Total": 55.0}, {"Year": 2009.0, "% Women": 0.1765, "Women": 9.0, "% Men": 0.8235, "Men": 42.0, "Total": 51.0}, {"Year": 2010.0, "% Women": 0.2045, "Women": 9.0, "% Men": 0.7955, "Men": 35.0, "Total": 44.0}, {"Year": 2011.0, "% Women": 0.2619, "Women": 11.0, "% Men": 0.7381, "Men": 31.0, "Total": 42.0}, {"Year": 2012.0, "% Women": 0.2632, "Women": 10.0, "% Men": 0.7368, "Men": 28.0, "Total": 38.0}, {"Year": 2013.0, "% Women": 0.25, "Women": 11.0, "% Men": 0.75, "Men": 33.0, "Total": 44.0}, {"Year": 2014.0, "% Women": 0.1957, "Women": 9.0, "% Men": 0.8043, "Men": 37.0, "Total": 46.0}, {"Year": 2015.0, "% Women": 0.2157, "Women": 11.0, "% Men": 0.7843, "Men": 40.0, "Total": 51.0}, {"Year": 2016.0, "% Women": 0.2041, "Women": 10.0, "% Men": 0.7959, "Men": 39.0, "Total": 49.0}, {"Year": 2017.0, "% Women": 0.2182, "Women": 12.0, "% Men": 0.7818, "Men": 43.0, "Total": 55.0}], "ENG-TE": [{"Year": 2007.0, "% Women": 0.0638, "Women": 6.0, "% Men": 0.9362, "Men": 88.0, "Total": 94.0}, {"Year": 2008.0, "% Women": 0.06, "Women": 6.0, "% Men": 0.94, "Men": 94.0, "Total": 100.0}, {"Year": 2009.0, "% Women": 0.0748, "Women": 8.0, "% Men": 0.9252, "Men": 99.0, "Total": 107.0}, {"Year": 2010.0, "% Women": 0.0909, "Women": 10.0, "% Men": 0.9091, "Men": 100.0, "Total": 110.0}, {"Year": 2011.0, "% Women": 0.094, "Women": 11.0, "% Men": 0.906, "Men": 106.0, "Total": 117.0}, {"Year": 2012.0, "% Women": 0.1111, "Women": 14.0, "% Men": 0.8889, "Men": 112.0, "Total": 126.0}, {"Year": 2013.0, "% Women": 0.1212, "Women": 16.0, "% Men": 0.8788, "Men": 116.0, "Total": 132.0}, {"Year": 2014.0, "% Women": 0.1385, "Women": 18.0, "% Men": 0.8615, "Men": 112.0, "Total": 130.0}, {"Year": 2015.0, "% Women": 0.1353, "Women": 18.0, "% Men": 0.8647, "Men": 115.0, "Total": 133.0}, {"Year": 2016.0, "% Women": 0.1295, "Women": 18.0, "% Men": 0.8705, "Men": 121.0, "Total": 139.0}, {"Year": 2017.0, "% Women": 0.1377, "Women": 19.0, "% Men": 0.8623, "Men": 119.0, "Total": 138.0}]};

const START_YEAR = 2007;
const END_YEAR = 2017;
const YEARS = d3.range(START_YEAR, END_YEAR + 1);
const numYears = YEARS.length;

// The year of a line to which we point an annotation label
const lineLabelYear = 2014;

const CONNECTOR_LENGTH = 44;

const animTime = 500; // transition duration constant

// Copy for what happened in each division and status.
const descriptions = [
  {
    div: 'HUM',
    steps: [
      {
        status: 'NE',
        before: 'From 2007 to 2017, the percentage of female faculty in the Humanities who <b>were not eligible for tenure...</b>',
        msg: '<b>has remained around 62%</b>, even with the number of Humanities faculty ineligible for tenure having grown almost 140%.',
      },
      {
        status: 'TE',
        before: 'In the same time period, how do you think the percentage of female faculty in the Humanities who <b>were tenured</b> has changed?',
        msg:
          'Though women make up a strong majority among the Humanities faculty who are ineligible for tenure, the percentage of women in tenured faculty positions has grown at a leaden rate.',
          // <a href="http://features.columbiaspectator.com/eye/2015/04/30/leaks-in-the-pipeline/">tens of millions</a>
      },
    ],
  },
  {
    div: 'NAT',
    steps: [
      {
        status: 'NE',
        before: 'The Natural Sciences faculty who were ineligible for tenure saw a sharp rise in female representation at the untenured level '
        msg: 'rose sharply from 2007 to 2011. It has since neared the parity line.',
      },
      { 
        status: 'TE',
        msg: 
          'The University created the Office of the Vice Provost for Diversity in 2004. In the following years it played a significant part in the improvement we saw in female representation at the untenured level. However, progress at the tenured level has <a href="https://www.columbiaspectator.com/news/2018/09/13/new-faculty-diversity-data-shows-stagnation-in-percentage-of-black-latinx-faculty/">stagnated in the past few years</a>.',
      },
    ],
  },
];

const allDivisions = [ 'HUM', 'NAT', 'SOC', 'ENG' ];
const divisions = {
  'HUM': 'Humanities',
  'NAT': 'Natural Sciences',
  'SOC': 'Social Sciences',
  'ENG': 'Engineering',
};

const allStatuses = [ 'NE', 'EL', 'TE' ];
const statuses = {
  'NE': 'NOT eligible for tenure',
  'EL': 'NOT tenured, but eligible for tenure,',
  'TE': 'tenured',
};

let width = 860;
const margin = { top: 10, right: 100, bottom: 50, left: 100 };
const windowWidth = window.innerWidth;
if (windowWidth < width) {
  width = windowWidth;
  margin.left = margin.right = windowWidth / 7;
}
const height = width * 5 / 8.6;

function PercentGraph(div, info, selectorId, shouldGuess = false) {
  const { status, before, msg } = info;
  const data = TABLES[div + '-' + status].map(d => d['% Women']);
  const container = d3.select(`#${selectorId}`);

  // to be populated at a later time
  let guessedData;

  // Add chart svg to the page, use margin conventions
  const svg = container
    .append('div')
    .attr('class', 'svg-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);
  const gWidth = width - margin.left - margin.right;
  const gHeight = height - margin.top - margin.bottom;

  // X scale will use the years from 2007 to 2017
  const xScale = d3
    .scaleLinear()
    .domain([START_YEAR, END_YEAR])
    .range([0, gWidth]);
  // Y scale will use our percentages
  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([gHeight, 0]);
  const datumFromYear = year => data[year - START_YEAR];
  const yScaleFromYear = year => yScale(datumFromYear(year));

  this.getScales = () => ({ xScale, yScale });
  this.getDimensions = () => ({ gWidth, gHeight });
  this.getSVG = () => svg;
  this.getLastDatum = () => data[data.length - 1];

  this.labelAxes = () => {
    svg.append('text') // y-axis
      .attr('x', 0)
      .attr('y', gHeight / 2)
      .text('Percent women')
      .attr('class', 'y axis-label');
    svg.append('text') // x-axis
      .attr('x', gWidth / 2)
      .attr('y', gHeight)
      .attr('text-anchor', 'middle')
      .attr('class', 'parity-label')
      .attr('class', 'x axis-label')
      .text('Year');
  };

  // We can assume this function was callled when shouldGuess is true.
  this.revealConclusion = guessedData => {
    const invYScale = d3
      .scaleLinear()
      .domain([gHeight, 0])
      .range([0, 1]);
    const mse = guessedData.reduce((acc, d, i) => {
      const guess = invYScale(d);
      const actual = data[i];
      return acc + Math.pow(guess - actual, 2);
    }, 0) / data.length;
    const rmse = Math.sqrt(mse);
    let correctness = 'estimated well.';
    if (rmse > 0.3) {
      correctness = 'were not close.';
    } else if (rmse > 0.2) {
      correctness = 'did okay.';
    } else if (rmse > 0.1) {
      correctness = 'were close.';
    }
    container
      .append('p')
      .attr('class', 'description')
      .html(`<b>You ${correctness}</b> ${msg}`)
      .style('visibility', 'visible');
  };

  this.drawSkeleton = () => {
    container
      .insert('p', ':first-child')
      .html(before)
      /*
      .html(
        shouldGuess ?
          `In the same time period, how do you think the percentage of female faculty in the <b>${divisions[div]}</b> who <b>were ${statuses[status]}</b> changed?` :
          `From 2007 to 2017, the percentage of female faculty in the <b>${divisions[div]}</b> who <b>were ${statuses[status]}...</b>`
      );*/

    // Draw the x axis and remove thousand-grouping formatting from years
    // (e.g. 2,004 --> 2004)
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${gHeight})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.format('')));
    // Draw the y axis, applying percent formatting
    svg
      .append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale).tickFormat(d3.format('.0%')));

    // Draw the parity line
    const parityLine = d3
      .line()
      .x(xScale)
      .y(yScale(0.5));
    svg
      .append('path')
      .datum([START_YEAR, END_YEAR])
      .attr('class', 'parity-line')
      .attr('d', parityLine);
    // Add parity label
    svg
      .append('text')
      .attr('x', gWidth / 2)
      .attr('y', gHeight / 2 + 5)
      .attr('alignment-baseline', 'hanging')
      .attr('text-anchor', 'middle')
      .attr('class', 'parity-label')
      .text('Equal Number of Women and Men'.toUpperCase());

    if (!shouldGuess) {
      container
        .append('p')
        .attr('class', 'description')
        .html(`<b>...</b>${msg}`);
    }

    this.labelAxes();
  };

  // position is either -1 (above) or 1 (below)
  this.labelLine = (compareWith, compareWithNext, label = 'Reality') => {
    const lineY = yScaleFromYear(lineLabelYear);
    const placement = lineY > compareWith ? 1 : -1;
    const makeAnnotation = d3.annotation()
      .type(d3.annotationLabel)
      .annotations([{
        note: { label },
        x: xScale(lineLabelYear),
        y: lineY,
        dx: 0,
        dy: placement * CONNECTOR_LENGTH,
      }]);

    svg.append('g')
      .attr('class', 'annotation-group line-label')
      .call(makeAnnotation);

    return yScaleFromYear(lineLabelYear + 1) > compareWithNext ? -1 : 1;
  };

  // if placeOver is true, a line is drawn normally.
  // if it is false, the line is drawn behind everything else.
  // dotted makes the line dotted.
  this.drawLine = (placeOver = true) => {
    const lineGenerator = d3.line()
      .x((_, i) => xScale(START_YEAR + i))
      .y(yScale);

    const line = placeOver ? svg.append('path') : svg.insert('path', ':first-child');
    line
      .datum(data)
      .attr('class', 'line')
      .attr('d', lineGenerator);

    // Draw path over a specified amount of time
    const totalLength = line.node().getTotalLength();
    return [
      line,
      line
        .attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
          .duration(2 * animTime)
          .attr('stroke-dashoffset', 0),
    ];

  };

  this.drawArea = isAbove => {    
    const areaGenerator = d3.area()
      .x((_, i) => xScale(START_YEAR + i))
      .y0(isAbove ? gHeight : yScale)
      .y1(isAbove ? yScale : 0);

    let dy = (isAbove ? -1 : 1) * gHeight / 4;
    if (data[Math.ceil(data.length / 2)] < 0.3) {
      dy += gHeight / 7;
    }

    const makeLabel = d3.annotation()
      .type(d3.annotationLabel)
      .annotations([{
        note: {
          label: isAbove ? 'MEN' : 'WOMEN',
          bgPadding: {
            top: 10,
            left: 8,
            right: 8,
            bottom: 8,
          },
        },
        x: gWidth / 2,
        y: gHeight / 2,
        dx: 0,
        dy,
      }]);

    // Append the path, bind the data, and call the area generator
    return svg
      .insert('path', ':first-child')
      .datum(data)
      .attr('d', areaGenerator)
      .style('fill-opacity', 0)
      .style('fill', isAbove ? '#8dd3c7' : '#fb8072')
      .style('transform', 'translateX(1px)')
      .transition()
        .duration(animTime)
        .style('fill-opacity', 1)
        .on('end', () => {
          svg.append('g')
            .attr('class', 'annotation-group area-label')
            .call(makeLabel);
        });
  };

  this.drawAreas = () => {
    this.drawArea(true);
    this.drawArea(false);
  };

  // labelPlacement parameter: -1 = above, 1 = below
  this.drawEndpoints = (labelPlacement = 1, forYears = [START_YEAR, END_YEAR]) => {
    const labels = forYears.map(year => d3.format('.0%')(datumFromYear(year)));
    const makeLabels = d3.annotation()
      .type(d3.annotationLabel)
      .annotations(
        forYears.map((year, i) => ({
          note: { label: labels[i] },
          connector: {
            end: 'dot',
            endScale: 2.6,
          },
          x: xScale(year),
          y: yScaleFromYear(year),
          dx: 30 * (1 - 2*i),
          dy: labelPlacement * 45 - (datumFromYear(year) < 0.15 && 19),
        })),
      );
    const a = svg.append('g')
      .attr('class', 'annotation-group dot-labels');
    a.call(makeLabels);
    const labelText = a.selectAll('.annotation-note-label');
    if (labels.length == 1) {
      labelText.append('tspan').html(labels[0]).attr('dy', 0).attr('x', 0);
      labelText.select('tspan').attr('class', 'text-bg')
    }
    if (labelPlacement === -1) {
      labelText.style('transform', (_, i) => `translate(${i > 0 ? '-' : ''}19px, 7px)`);
    }
  };
};

class Activity {
  constructor(activity) {
    this.activity = activity;
    this.div = activity.div;
    this.id = divisions[this.div].replace(/\s/g, '-');
    this.container = d3.select('div#container')
      .append('div')
      .attr('class', 'chart-container');

    this.drawChart(activity.steps[0]);
    this.youDrawIt(activity.steps[1]);
  }

  drawChart(info) {
    this.container
      .append('div')
      .attr('id', this.id + '-chart');
    const chart = new PercentGraph(
      this.div,
      info,
      this.id + '-chart',
    );
    chart.drawSkeleton();
    chart
      .drawLine()[1]
      .on('end', () => {
        chart.drawAreas();
        chart.drawEndpoints(); // draw and label line endpoints
      });
  }

  youDrawIt(info) {
    // this.container.append('p').text('Instructions? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus nulla et arcu ullamcorper tincidunt.');
    const selector = this.id + '-youdrawit';
    const container = this.container
      .append('div')
      .attr('id', selector);
    const chart = new PercentGraph(
      this.div,
      info,
      selector,
      true
    );
    const svg = chart.getSVG();
    const { gWidth, gHeight } = chart.getDimensions();
    const { xScale, yScale } = chart.getScales();
    const numBands = numYears - 1;
    const bands = svg
      .append('g')
      .selectAll('rect.band')
      .data(new Array(numBands));
    const drawInstruction = svg.append('text')
      .attr('x', gWidth / 2)
      .attr('class', 'draw-instruction')
      .attr('y', gHeight / 8)
      .text(`Draw the line for faculty who were ${statuses[info.status]}.`)
    const bandWidth = gWidth / numBands;
    bands
      .enter()
      .append('rect')
      .attr('height', gHeight)
      .attr('width', bandWidth)
      .attr('class', 'band')
      .attr('x', (_, i) => bandWidth * i);

    const lineGen = d3.line().defined(d => d);
    const path = svg.append('path').attr('class', 'yourpath');

    const capture = svg
      .append('rect')
      .attr('width', gWidth)
      .attr('height', gHeight)
      .attr('fill', 'none')
      .attr('pointer-events', 'all');

    let isFirstTouch;
    let maxBand;
    let pathData;

    const btnContainer = container.append('div').classed('btn-container', true);

    const reset = () => {
      isFirstTouch = true;
      maxBand = -1;
      pathData = new Array(numBands + 1);
      path
        .transition()
        .style('visibility', 'hidden')
        .on('end', () => path.attr('d', null).style('visibility', 'visible'));
      svg.selectAll('rect.band').classed('highlighted', false);
      btnContainer.selectAll('button').attr('disabled', true);
      svg.selectAll('.dot').remove();
      drawInstruction.style('visibility', 'visible');
    };

    const concludeDrawing = () => {
      btnContainer.selectAll('button').attr('disabled', true)
      drawInstruction.transition().style('visibility', 'hidden');  
      svg.selectAll('rect.band').remove();
      const realityLine = chart.drawLine(false);
      realityLine[1]
        .on('end', () => {
          svg.selectAll('.dot').remove();
          realityLine[0].attr('class', 'line dotted');

          // stops mouse events from propagating up to capture, disabling drag funcitonality
          capture.attr('pointer-events', 'none');
          
          const pathY1 = pathData[lineLabelYear - START_YEAR][1];
          const pathY2 = pathData[lineLabelYear - START_YEAR + 1][1];
          const guessLabelPlacement = chart.labelLine(pathY1, pathY2); // label Reality

          // label Your Guess
          const makeAnnotation = d3.annotation()
            .type(d3.annotationLabel)
            .annotations([{
              note: {
                label: 'Your Estimate',
                wrapSplitter: /\n/,
              },
              x: xScale(lineLabelYear + 1),
              y: pathY2,
              dx: 0,
              dy: guessLabelPlacement * CONNECTOR_LENGTH,
            }]);
          svg.append('g')
            .attr('class', 'annotation-group guess line-label')
            .call(makeAnnotation);

          svg.select('path.yourpath').classed('completed', true);

          chart.revealConclusion(pathData.map(d => d[1]));

          chart.drawAreas();

          chart.drawEndpoints(-guessLabelPlacement);
        });
    };
    const doneBtn = btnContainer.append('button')
      .classed('button', true)
      .attr('disabled', true)
      .text('How did I do?')
      .on('click', concludeDrawing);
    reset();
    capture.on('mousedown', () => {
      capture
        .on('mousemove', function(d, i) {
          const [x, y] = d3.mouse(this);
          const bandNum = Math.round(x / (gWidth / numBands));
          if (bandNum > maxBand) {
            maxBand = bandNum;
          }
          pathData[bandNum] = [bandNum * bandWidth, y];
          if (isFirstTouch) {
            for (let i = 0; i < bandNum; i++) {
              pathData[i] = [i * bandWidth, y];
            }
            isFirstTouch = false;
          }

          if (!pathData.includes(undefined)) { // all points have been drawn
            doneBtn.attr('disabled', null);
          }
          svg.selectAll('rect.band').classed('highlighted', (_, i) => i >= maxBand);
          path.datum(pathData).attr('d', lineGen);

          const definedPathData = Object.values(pathData);
          const dots = svg
            .selectAll('.dot')
            .data(definedPathData);
          dots
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('r', 4.5)
            .merge(dots)
            .attr('cx', d => d[0])
            .attr('cy', d => d[1]);
        })
        .on('mouseleave', function() {
          // if mouse left the last band, remove mousemove and mouseup listeners
          const [x, y] = d3.mouse(this);
          const bandNum = Math.round(x / (gWidth / numBands));
          if (bandNum === numBands) {
            capture.on('mousemove', null).on('mouseup',null);
          }
        })
        .on('mouseup', () => {
          capture.on('mousemove', null).on('mouseup', null);
        });
    });
    chart.drawSkeleton();
    chart.drawEndpoints(-1, [START_YEAR]);
    container.select('p.description').style('visibility', 'hidden');
    capture.raise(); // moves our pointer event capturer on top of chart elements
  };
}

descriptions.map(d => new Activity(d));
