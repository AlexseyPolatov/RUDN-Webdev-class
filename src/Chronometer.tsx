import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Chip,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import FlagIcon from '@mui/icons-material/Flag';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface LapRecord {
  id: number;
  value: number;
}

const Chronometer = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [lapHistory, setLapHistory] = useState<LapRecord[]>([]);
  const timerId = useRef<ReturnType<typeof setInterval> | null>(null);
  const lapCounter = useRef(0);

  const convertToDisplay = useCallback((totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    if (h > 0) {
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    if (active) {
      const intervalDuration = 1000 / multiplier;
      timerId.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, intervalDuration);
    } else {
      if (timerId.current) {
        clearInterval(timerId.current);
        timerId.current = null;
      }
    }

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [active, multiplier]);

  const startTimer = () => {
    setActive(true);
  };

  const pauseTimer = () => {
    setActive(false);
  };

  const clearTimer = () => {
    setActive(false);
    setElapsedSeconds(0);
    setLapHistory([]);
    setMultiplier(1);
    lapCounter.current = 0;
  };

  const recordLap = () => {
    lapCounter.current += 1;
    setLapHistory((prev) => [
      ...prev,
      { id: lapCounter.current, value: elapsedSeconds },
    ]);
  };

  const increaseSpeed = () => {
    if (multiplier < 2) {
      setMultiplier((prev) => prev * 2);
    }
  };

  const decreaseSpeed = () => {
    if (multiplier > 0.5) {
      setMultiplier((prev) => prev / 2);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: { xs: '3rem', sm: '4rem' },
                mb: 2,
              }}
            >
              {convertToDisplay(elapsedSeconds)}
            </Typography>
            <Chip
              label={`×${multiplier}`}
              icon={<SpeedIcon />}
              color="primary"
              sx={{ display: 'block', mx: 'auto', width: 'fit-content' }}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayCircleOutlineIcon />}
                  onClick={startTimer}
                  disabled={active}
                  color="success"
                >
                  Запуск
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PauseCircleOutlineIcon />}
                  onClick={pauseTimer}
                  disabled={!active}
                  color="warning"
                >
                  Пауза
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<RestartAltIcon />}
                  onClick={clearTimer}
                  color="error"
                >
                  Обнулить
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item>
                <Tooltip title="Замедлить">
                  <IconButton
                    color="secondary"
                    onClick={decreaseSpeed}
                    disabled={multiplier <= 0.5}
                    size="large"
                  >
                    <RemoveIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  startIcon={<FlagIcon />}
                  onClick={recordLap}
                  disabled={!active}
                  size="medium"
                >
                  Фиксировать круг
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="Ускорить">
                  <IconButton
                    color="secondary"
                    onClick={increaseSpeed}
                    disabled={multiplier >= 2}
                    size="large"
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>

          {lapHistory.length > 0 && (
            <>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  История кругов:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  {lapHistory.map((lap) => (
                    <Grid item xs={12} key={lap.id}>
                      <Card variant="outlined">
                        <CardContent sx={{ py: 1.5, '&:last-child': { pb: 1.5 } }}>
                          <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                              <Typography variant="body1" fontWeight="medium">
                                Круг #{lap.id}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="h6" fontFamily="monospace">
                                {convertToDisplay(lap.value)}
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Chronometer;
