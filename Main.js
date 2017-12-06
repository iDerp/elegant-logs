module.exports = {
  boot: async(logmsg, color, color2) => {
    try {
      const colors = await getColors(color, color2);

      console.log(`\x1b[${colors[0]}mBOOT    \x1b[0m|| \x1b[${colors[1]}m${logmsg}\x1b[0m`);
    } catch (err) {
      console.log('\x1b[33mElegant \x1b[0m|| Error creating your log');
    }
  },
  cmd: async(logmsg, color, color2) => {
    try {
      const colors = await getColors(color, color2);

      console.log(`\x1b[${colors[0]}mCMD     \x1b[0m|| \x1b[${colors[1]}m${logmsg}\x1b[0m`);
    } catch (err) {
      console.log('\x1b[33mElegant ||\x1b[0m Error creating your log');
    }
  },
  critical: async(logmsg, color, color2) => {
    try {
      const colors = await getColors(color, color2);

      console.log(`\x1b[${colors[0]}mCritical\x1b[0m|| \x1b[${colors[1]}m${logmsg}\x1b[0m`);
    } catch (err) {
      console.log('\x1b[33mElegant \x1b[0m|| Error creating your log');
    }
  },
  error: async(logmsg, color, color2) => {
    try {
      const colors = await getColors(color, color2);

      console.log(`\x1b[${colors[0]}mERROR   \x1b[0m|| \x1b[${colors[1]}m${logmsg}\x1b[0m`);
    } catch (err) {
      console.log('\x1b[33mElegant \x1b[0m|| Error creating your log');
    }
  },
  log: async(logmsg, title, color, color2) => {
    try {
      const colors = await getColors(color, color2);

      console.log(`\x1b[${colors[0]}m${title}\x1b[0m \x1b[${colors[1]}m${logmsg}\x1b[0m`);
    } catch (err) {
      console.log('\x1b[33mElegant ||\x1b[0m Error creating your log');
    }
  },
  status: async(logmsg, color, color2) => {
    try {
      const colors = await getColors(color, color2);

      console.log(`\x1b[${colors[0]}mSTATUS  \x1b[0m|| \x1b[${colors[1]}m${logmsg}\x1b[0m`);
    } catch (err) {
      console.log('\x1b[33mElegant \x1b[0m|| Error creating your log');
    }
  },
  success: async(logmsg, color, color2) => {
    try {
      const colors = await getColors(color, color2);

      console.log(`\x1b[${colors[0]}mSUCCESS \x1b[0m|| \x1b[${colors[1]}m${logmsg}\x1b[0m`);
    } catch (err) {
      console.log('\x1b[33mElegant \x1b[0m|| Error creating your log');
    }
  }
};

async function getColors(color, color2) {
  return new Promise((resolve) => {
    const findColor = (type) => {
      if (type === 'reset') {
        return '0';
      } else if (type === 'bright') {
        return '1';
      } else if (type === 'dim') {
        return '2';
      } else if (type === 'blink') {
        return '5';
      } else if (type === 'reverse') {
        return '7';
      } else if (type === 'hidden') {
        return '8';
      } else if (type === 'black') {
        return '30';
      } else if (type === 'red') {
        return '31';
      } else if (type === 'green') {
        return '32';
      } else if (type === 'yellow') {
        return '33';
      } else if (type === 'blue') {
        return '34';
      } else if (type === 'purple') {
        return '35';
      } else if (type === 'cyan') {
        return '36';
      } else if (type === 'bgblack') {
        return '40';
      } else if (type === 'bgred') {
        return '41';
      } else if (type === 'bggreen') {
        return '42';
      } else if (type === 'bgyellow') {
        return '43';
      } else if (type === 'bgblue') {
        return '44';
      } else if (type === 'bgpurple') {
        return '45';
      } else if (type === 'bgcyan') {
        return '46';
      } else if (type === 'bgwhite') {
        return '47';
      } else {
        return '37';
      }
    };

    color = findColor(color.toLowerCase());
    color2 = findColor(color2.toLowerCase());

    resolve([color, color2]);
  });
}