import { Request, Response } from 'express';
import { readFile } from '../utils/read.write.file';

export const getRoutesTravelController = (req: Request, res: Response) => {
  const { from, to, time } = req.query;

  const routesTravel = readFile('src/database/routes.json');

  if (from && to && time) {
    // Filtering based on these req.query

    const routesTravelFilteredByCities = routesTravel.filter((route: any) => {
      return route?.departure_city === from && route?.destination_city === to;
    });

    const routesTravelFilteredBySchedule = routesTravelFilteredByCities?.map(
      (route: any) => {
        const filteredSchedules = route?.schedules?.filter((schedule: any) => {
          return schedule?.departure_time === time;
        });

        return { ...route, schedules: filteredSchedules };
      }
    );

    res.status(200).json({
      success: true,
      message: 'Get routes travel by cities and time successfull',
      data: routesTravelFilteredBySchedule,
    });
  } else {
    res.status(200).json({
      success: true,
      message: 'Get routes travel successfull',
      data: routesTravel,
    });
  }
};
