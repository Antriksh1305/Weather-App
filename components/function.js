import React from 'react';

function findday() {
      const date = new Date();
      const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const monthname = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
      ];
      let day = week[date.getDay() - 1];
      let month = monthname[date.getMonth()];
      let initial;
      {
            date.toDateString()[8] == '0' ? (initial = 9) : (initial = 8);
      }
      return [day, month, date.toString().substring(initial, 10)];
}

function daydescription(name) {
      if (name === 'clear') return 'Sunny Day';
      else if (name === 'cloud') return 'Cloudy Day';
      else if (name === 'rain') return 'Rainy Day';
      else if (name === 'thunder') return 'Thunderstorm';
      else if (name === 'snow') return 'Snow';
      else {
            return 'Clear';
      }
}

const svg = [
      {
            id: 0,
            icon: 'Snow',
            desc: 'Snowy Day',
      },
      {
            id: 1,
            icon: 'Thunder',
            desc: 'Thunderstorm',
      },
      {
            id: 2,
            icon: 'Rain',
            desc: 'Rainy Day',
      },
      {
            id: 3,
            icon: 'Cloud',
            desc: 'Cloudy Day',
      },
      {
            id: 4,
            icon: 'Clear',
            desc: 'Clear Day',
      },
];
function findicon(svgname) {
      let i = 0, x = svgname, lower, upper;
      let found = svg.find((ele) => {
            lower = x.includes(svg[i].icon[0].toLowerCase() + svg[i].icon.substring(1, svg[i].icon.length));
            upper = x.includes(svg[i].icon);
            if (lower === true || upper === true) {
                  return ele.icon;
            }
            i++;
      })
      if( found == undefined ){
            return svg[4];
      }
      else {
            return found;
      }
}

export { findday, daydescription, findicon };