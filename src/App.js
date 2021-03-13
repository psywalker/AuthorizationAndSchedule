import React, { useState, useEffect, useCallback, memo } from "react";
import { Authorization } from "./components/Authorization";
import { Graph } from "./components/Graph";
import { Header } from "./components/Header";
import { LINE_GRAPH_URL, DONUT_GRAPH_URL } from './constants'
import { Grid, Container } from '@material-ui/core';
import MoonLoader from "react-spinners/MoonLoader";
import { useStyles } from './styled'

export const App = memo(() => {
  const [lineGraphData, setLineGraphData] = useState(null);
  const [donutGraphData, setDonutGraphData] = useState(null);
  const [login, setLogin] = useState('');
  const [isAuthorization, setIsAuthorization] = useState(false);
  const [loadingGpaph, setLoadingGpaph] = useState(false);
  const [loadingDonut, setLoadingDonut] = useState(false);
  const classes = useStyles();

  const sendRequest = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      }
    });
    return response.json();
  };
  const getGraphData = useCallback(() => {
    sendRequest(LINE_GRAPH_URL).then(resolve => {
      setLineGraphData(resolve)
      setLoadingGpaph(false)
    }).catch(err => console.log(err))

    sendRequest(DONUT_GRAPH_URL).then(resolve => {
      setDonutGraphData(resolve)
      setLoadingDonut(false)
    }).catch(err => console.log(err))
  },[])

  const handleAuthorization = useCallback((log) => {
    setLogin(log)
    setIsAuthorization(true)
    setLoadingGpaph(true)
    setLoadingDonut(true);
    getGraphData()
  }, [getGraphData])

  const clearData = useCallback(() => {
    localStorage.clear()
    setIsAuthorization(false)
    setLineGraphData(null)
    setDonutGraphData(null)
  }, [])

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (login) handleAuthorization(login)
  }, [handleAuthorization]);

  if (!isAuthorization) return <Authorization handleAuthorization={handleAuthorization} />
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Header handleLogOut={clearData} login={login} />
      <Grid container>
        <Grid item className={classes.item1}>
          <MoonLoader loading={loadingGpaph} size={50} />
          { lineGraphData && <Graph type="line" data={lineGraphData} />}
        </Grid>
        <Grid item className={classes.item2}>
          <MoonLoader loading={loadingDonut} size={50} />
          { donutGraphData && <Graph type="donut" data={donutGraphData} /> }
        </Grid>
      </Grid>
    </Container>
  );
})
