import "./styles.css";
// import axios from "axios";
import Map, {
  Marker,
  NavigationControl,
  ScaleControl,
  Popup,
  FullscreenControl,
  GeolocateControl
} from "react-map-gl";
import React, { useEffect, useState } from "react";
import Pin from "./Pin";

// const token = process.env.REACT_APP_MAPBOX_TOKEN;

const colors = ["red", "blue", "yellow"];

const MapComponent = () => {
  // const api_url = "http://3.233.221.252:8080/";

  const [popupInfo, setPopupInfo] = useState(null);
  const [data, setData] = useState(null);

  const callApiData = async () => {
    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
        const dummyData = {
          Name: "DB_MapTestPoints",
          NoOfPoints: 400,
          Points: [
            {
              Lat: 38.916893,
              Lon: -77.212151,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684689392,
              Timestamp_str: "2023/16/05-17:16:32"
            },
            {
              Lat: 38.915092,
              Lon: -77.214688,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683750911,
              Timestamp_str: "2023/35/05-20:35:11"
            },
            {
              Lat: 38.911816,
              Lon: -33,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689554940,
              Timestamp_str: "2023/49/07-00:49:00"
            },
            {
              Lat: 38.912989,
              Lon: -74,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686860177,
              Timestamp_str: "2023/16/06-20:16:17"
            },
            {
              Lat: 38.913676,
              Lon: -7,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688774345,
              Timestamp_str: "2023/59/07-23:59:05"
            },
            {
              Lat: 34,
              Lon: -3,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688327193,
              Timestamp_str: "2023/46/07-19:46:33"
            },
            {
              Lat: 31,
              Lon: -77.218585,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688560563,
              Timestamp_str: "2023/36/07-12:36:03"
            },
            {
              Lat: 4,
              Lon: -77.214589,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691253043,
              Timestamp_str: "2023/30/08-16:30:43"
            },
            {
              Lat: 38.912429,
              Lon: -77.215483,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685088095,
              Timestamp_str: "2023/01/05-08:01:35"
            },
            {
              Lat: 38.916794,
              Lon: -77.220965,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683398425,
              Timestamp_str: "2023/40/05-18:40:25"
            },
            {
              Lat: 38.912579,
              Lon: -77.216145,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689622888,
              Timestamp_str: "2023/41/07-19:41:28"
            },
            {
              Lat: 38.915078,
              Lon: -77.21625,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1690589127,
              Timestamp_str: "2023/05/07-00:05:27"
            },
            {
              Lat: 38.918732,
              Lon: -77.217938,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684229730,
              Timestamp_str: "2023/35/05-09:35:30"
            },
            {
              Lat: 38.91979,
              Lon: -77.220581,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687534746,
              Timestamp_str: "2023/39/06-15:39:06"
            },
            {
              Lat: 38.913069,
              Lon: -77.214745,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687844096,
              Timestamp_str: "2023/34/06-05:34:56"
            },
            {
              Lat: 38.920174,
              Lon: -77.214138,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1687233295,
              Timestamp_str: "2023/54/06-03:54:55"
            },
            {
              Lat: 39,
              Lon: -77.217272,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685726249,
              Timestamp_str: "2023/17/06-17:17:29"
            },
            {
              Lat: 38.920635,
              Lon: -77.212334,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686619075,
              Timestamp_str: "2023/17/06-01:17:55"
            },
            {
              Lat: 31,
              Lon: -77.212007,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685428357,
              Timestamp_str: "2023/32/05-06:32:37"
            },
            {
              Lat: 9,
              Lon: -77.215918,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690327031,
              Timestamp_str: "2023/17/07-23:17:11"
            },
            {
              Lat: 38.918404,
              Lon: -77.217518,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691010318,
              Timestamp_str: "2023/05/08-21:05:18"
            },
            {
              Lat: 3,
              Lon: -73,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689814808,
              Timestamp_str: "2023/00/07-01:00:08"
            },
            {
              Lat: 38.911701,
              Lon: -77.21486,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683884115,
              Timestamp_str: "2023/35/05-09:35:15"
            },
            {
              Lat: 38.913214,
              Lon: -77.216203,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688406948,
              Timestamp_str: "2023/55/07-17:55:48"
            },
            {
              Lat: 38.917127,
              Lon: -77.220288,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683031853,
              Timestamp_str: "2023/50/05-12:50:53"
            },
            {
              Lat: 38.915195,
              Lon: -77.215305,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1682923694,
              Timestamp_str: "2023/48/05-06:48:14"
            },
            {
              Lat: 38.918138,
              Lon: -77.213251,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683338166,
              Timestamp_str: "2023/56/05-01:56:06"
            },
            {
              Lat: 38.914846,
              Lon: -77.216577,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684544898,
              Timestamp_str: "2023/08/05-01:08:18"
            },
            {
              Lat: 38.911143,
              Lon: -77.221537,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686122154,
              Timestamp_str: "2023/15/06-07:15:54"
            },
            {
              Lat: 38.916744,
              Lon: -77.215962,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1689557557,
              Timestamp_str: "2023/32/07-01:32:37"
            },
            {
              Lat: 38.91543,
              Lon: -77.215554,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689541372,
              Timestamp_str: "2023/02/07-21:02:52"
            },
            {
              Lat: 38.913343,
              Lon: -77.215138,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690150365,
              Timestamp_str: "2023/12/07-22:12:45"
            },
            {
              Lat: 38.916772,
              Lon: -77.213412,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686916276,
              Timestamp_str: "2023/51/06-11:51:16"
            },
            {
              Lat: 38.916238,
              Lon: -77.211799,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690899702,
              Timestamp_str: "2023/21/08-14:21:42"
            },
            {
              Lat: 38.918378,
              Lon: -77.220046,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684835548,
              Timestamp_str: "2023/52/05-09:52:28"
            },
            {
              Lat: 38.913164,
              Lon: -77.215278,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688711919,
              Timestamp_str: "2023/38/07-06:38:39"
            },
            {
              Lat: 38.911098,
              Lon: -77.217634,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1691067665,
              Timestamp_str: "2023/01/08-13:01:05"
            },
            {
              Lat: 38.916567,
              Lon: -77.21567,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688576100,
              Timestamp_str: "2023/55/07-16:55:00"
            },
            {
              Lat: 38.915762,
              Lon: -77.211976,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685594268,
              Timestamp_str: "2023/37/06-04:37:48"
            },
            {
              Lat: 38.918676,
              Lon: -77.217623,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689541193,
              Timestamp_str: "2023/59/07-20:59:53"
            },
            {
              Lat: 38.918244,
              Lon: -77.215016,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688605297,
              Timestamp_str: "2023/01/07-01:01:37"
            },
            {
              Lat: 38.911843,
              Lon: -77.220038,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688569243,
              Timestamp_str: "2023/00/07-15:00:43"
            },
            {
              Lat: 38.912443,
              Lon: -77.220178,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683019741,
              Timestamp_str: "2023/29/05-09:29:01"
            },
            {
              Lat: 38.916555,
              Lon: -77.216428,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688840289,
              Timestamp_str: "2023/18/07-18:18:09"
            },
            {
              Lat: 38.916091,
              Lon: -77.215013,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1689490412,
              Timestamp_str: "2023/53/07-06:53:32"
            },
            {
              Lat: 38.910974,
              Lon: -77.221249,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685132092,
              Timestamp_str: "2023/14/05-20:14:52"
            },
            {
              Lat: 38.919111,
              Lon: -77.218079,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683920467,
              Timestamp_str: "2023/41/05-19:41:07"
            },
            {
              Lat: 38.913011,
              Lon: -77.216006,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683859289,
              Timestamp_str: "2023/41/05-02:41:29"
            },
            {
              Lat: 38.912533,
              Lon: -77.218242,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1691056695,
              Timestamp_str: "2023/58/08-09:58:15"
            },
            {
              Lat: 38.911425,
              Lon: -77.211564,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685013995,
              Timestamp_str: "2023/26/05-11:26:35"
            },
            {
              Lat: 38.918654,
              Lon: -77.220635,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686035874,
              Timestamp_str: "2023/17/06-07:17:54"
            },
            {
              Lat: 38.913354,
              Lon: -77.21307,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684362289,
              Timestamp_str: "2023/24/05-22:24:49"
            },
            {
              Lat: 38.911061,
              Lon: -77.212104,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687036840,
              Timestamp_str: "2023/20/06-21:20:40"
            },
            {
              Lat: 38.913965,
              Lon: -77.217071,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687229695,
              Timestamp_str: "2023/54/06-02:54:55"
            },
            {
              Lat: 38.917564,
              Lon: -77.217554,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690734799,
              Timestamp_str: "2023/33/07-16:33:19"
            },
            {
              Lat: 38.914039,
              Lon: -77.216562,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683574656,
              Timestamp_str: "2023/37/05-19:37:36"
            },
            {
              Lat: 38.917296,
              Lon: -77.217269,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686574455,
              Timestamp_str: "2023/54/06-12:54:15"
            },
            {
              Lat: 38.913209,
              Lon: -77.213906,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684293191,
              Timestamp_str: "2023/13/05-03:13:11"
            },
            {
              Lat: 38.917104,
              Lon: -77.216425,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691483391,
              Timestamp_str: "2023/29/08-08:29:51"
            },
            {
              Lat: 38.919644,
              Lon: -77.211778,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684261987,
              Timestamp_str: "2023/33/05-18:33:07"
            },
            {
              Lat: 38.913324,
              Lon: -77.212422,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686661694,
              Timestamp_str: "2023/08/06-13:08:14"
            },
            {
              Lat: 38.917139,
              Lon: -77.214039,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690748814,
              Timestamp_str: "2023/26/07-20:26:54"
            },
            {
              Lat: 38.910994,
              Lon: -77.215718,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688471942,
              Timestamp_str: "2023/59/07-11:59:02"
            },
            {
              Lat: 38.920701,
              Lon: -77.213208,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688182411,
              Timestamp_str: "2023/33/07-03:33:31"
            },
            {
              Lat: 38.920406,
              Lon: -77.218451,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688334167,
              Timestamp_str: "2023/42/07-21:42:47"
            },
            {
              Lat: 38.919178,
              Lon: -77.218461,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685273030,
              Timestamp_str: "2023/23/05-11:23:50"
            },
            {
              Lat: 38.918031,
              Lon: -77.217489,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690205381,
              Timestamp_str: "2023/29/07-13:29:41"
            },
            {
              Lat: 38.911033,
              Lon: -77.213639,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684871907,
              Timestamp_str: "2023/58/05-19:58:27"
            },
            {
              Lat: 38.915173,
              Lon: -77.212508,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685779927,
              Timestamp_str: "2023/12/06-08:12:07"
            },
            {
              Lat: 38.917436,
              Lon: -77.218077,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684900099,
              Timestamp_str: "2023/48/05-03:48:19"
            },
            {
              Lat: 38.911077,
              Lon: -77.220312,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686997334,
              Timestamp_str: "2023/22/06-10:22:14"
            },
            {
              Lat: 38.913994,
              Lon: -77.221479,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691289972,
              Timestamp_str: "2023/46/08-02:46:12"
            },
            {
              Lat: 38.911848,
              Lon: -77.215124,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686064730,
              Timestamp_str: "2023/18/06-15:18:50"
            },
            {
              Lat: 38.91347,
              Lon: -77.218087,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688682398,
              Timestamp_str: "2023/26/07-22:26:38"
            },
            {
              Lat: 38.914357,
              Lon: -77.215564,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684675043,
              Timestamp_str: "2023/17/05-13:17:23"
            },
            {
              Lat: 38.912045,
              Lon: -77.21244,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683796677,
              Timestamp_str: "2023/17/05-09:17:57"
            },
            {
              Lat: 38.914088,
              Lon: -77.218048,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687143345,
              Timestamp_str: "2023/55/06-02:55:45"
            },
            {
              Lat: 38.920533,
              Lon: -77.214841,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688187337,
              Timestamp_str: "2023/55/07-04:55:37"
            },
            {
              Lat: 38.913868,
              Lon: -77.213477,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686653728,
              Timestamp_str: "2023/55/06-10:55:28"
            },
            {
              Lat: 38.917255,
              Lon: -77.212023,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690390077,
              Timestamp_str: "2023/47/07-16:47:57"
            },
            {
              Lat: 38.920274,
              Lon: -77.213244,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686468468,
              Timestamp_str: "2023/27/06-07:27:48"
            },
            {
              Lat: 38.917953,
              Lon: -77.218821,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1690495974,
              Timestamp_str: "2023/12/07-22:12:54"
            },
            {
              Lat: 38.92029,
              Lon: -77.21657,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686714346,
              Timestamp_str: "2023/45/06-03:45:46"
            },
            {
              Lat: 38.915372,
              Lon: -77.221106,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686390564,
              Timestamp_str: "2023/49/06-09:49:24"
            },
            {
              Lat: 38.918362,
              Lon: -77.216198,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1691204292,
              Timestamp_str: "2023/58/08-02:58:12"
            },
            {
              Lat: 38.915435,
              Lon: -77.21577,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684155106,
              Timestamp_str: "2023/51/05-12:51:46"
            },
            {
              Lat: 38.920352,
              Lon: -77.216457,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683021331,
              Timestamp_str: "2023/55/05-09:55:31"
            },
            {
              Lat: 38.911508,
              Lon: -77.218931,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688671942,
              Timestamp_str: "2023/32/07-19:32:22"
            },
            {
              Lat: 38.91494,
              Lon: -77.217398,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690682871,
              Timestamp_str: "2023/07/07-02:07:51"
            },
            {
              Lat: 38.91089,
              Lon: -77.218817,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686171973,
              Timestamp_str: "2023/06/06-21:06:13"
            },
            {
              Lat: 38.913417,
              Lon: -77.211665,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687329643,
              Timestamp_str: "2023/40/06-06:40:43"
            },
            {
              Lat: 38.913885,
              Lon: -77.216221,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689660567,
              Timestamp_str: "2023/09/07-06:09:27"
            },
            {
              Lat: 38.917897,
              Lon: -77.218984,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689063778,
              Timestamp_str: "2023/22/07-08:22:58"
            },
            {
              Lat: 38.918358,
              Lon: -77.221507,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691027924,
              Timestamp_str: "2023/58/08-01:58:44"
            },
            {
              Lat: 38.910979,
              Lon: -77.212057,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689293720,
              Timestamp_str: "2023/15/07-00:15:20"
            },
            {
              Lat: 38.911276,
              Lon: -77.214429,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689024920,
              Timestamp_str: "2023/35/07-21:35:20"
            },
            {
              Lat: 38.915603,
              Lon: -77.218081,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687009797,
              Timestamp_str: "2023/49/06-13:49:57"
            },
            {
              Lat: 38.913447,
              Lon: -77.213227,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684469264,
              Timestamp_str: "2023/07/05-04:07:44"
            },
            {
              Lat: 38.913139,
              Lon: -77.214353,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683895258,
              Timestamp_str: "2023/40/05-12:40:58"
            },
            {
              Lat: 38.914236,
              Lon: -77.216831,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691052529,
              Timestamp_str: "2023/48/08-08:48:49"
            },
            {
              Lat: 38.913343,
              Lon: -77.221077,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683284452,
              Timestamp_str: "2023/00/05-11:00:52"
            },
            {
              Lat: 38.917421,
              Lon: -77.219346,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690305692,
              Timestamp_str: "2023/21/07-17:21:32"
            },
            {
              Lat: 38.920039,
              Lon: -77.220059,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689064598,
              Timestamp_str: "2023/36/07-08:36:38"
            },
            {
              Lat: 38.913328,
              Lon: -77.217002,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688325362,
              Timestamp_str: "2023/16/07-19:16:02"
            },
            {
              Lat: 38.915969,
              Lon: -77.218892,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686161870,
              Timestamp_str: "2023/17/06-18:17:50"
            },
            {
              Lat: 38.912252,
              Lon: -77.219964,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683307822,
              Timestamp_str: "2023/30/05-17:30:22"
            },
            {
              Lat: 38.913304,
              Lon: -77.211881,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1691075079,
              Timestamp_str: "2023/04/08-15:04:39"
            },
            {
              Lat: 38.917563,
              Lon: -77.213181,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684402478,
              Timestamp_str: "2023/34/05-09:34:38"
            },
            {
              Lat: 38.915081,
              Lon: -77.216926,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1683429671,
              Timestamp_str: "2023/21/05-03:21:11"
            },
            {
              Lat: 38.915398,
              Lon: -77.219072,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688859907,
              Timestamp_str: "2023/45/07-23:45:07"
            },
            {
              Lat: 38.918272,
              Lon: -77.214988,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689175418,
              Timestamp_str: "2023/23/07-15:23:38"
            },
            {
              Lat: 38.913332,
              Lon: -77.217687,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688028056,
              Timestamp_str: "2023/40/06-08:40:56"
            },
            {
              Lat: 38.913712,
              Lon: -77.216443,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689732542,
              Timestamp_str: "2023/09/07-02:09:02"
            },
            {
              Lat: 38.917206,
              Lon: -77.214283,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684976243,
              Timestamp_str: "2023/57/05-00:57:23"
            },
            {
              Lat: 38.912158,
              Lon: -77.2161,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1683810097,
              Timestamp_str: "2023/01/05-13:01:37"
            },
            {
              Lat: 38.918629,
              Lon: -77.220138,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683583441,
              Timestamp_str: "2023/04/05-22:04:01"
            },
            {
              Lat: 38.914786,
              Lon: -77.221542,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685834602,
              Timestamp_str: "2023/23/06-23:23:22"
            },
            {
              Lat: 38.915371,
              Lon: -77.215594,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689329050,
              Timestamp_str: "2023/04/07-10:04:10"
            },
            {
              Lat: 38.91895,
              Lon: -77.220897,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688153985,
              Timestamp_str: "2023/39/06-19:39:45"
            },
            {
              Lat: 38.915752,
              Lon: -77.215366,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685585538,
              Timestamp_str: "2023/12/06-02:12:18"
            },
            {
              Lat: 38.918778,
              Lon: -77.220714,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683812005,
              Timestamp_str: "2023/33/05-13:33:25"
            },
            {
              Lat: 38.915048,
              Lon: -77.221335,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687682015,
              Timestamp_str: "2023/33/06-08:33:35"
            },
            {
              Lat: 38.916484,
              Lon: -77.21927,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686221526,
              Timestamp_str: "2023/52/06-10:52:06"
            },
            {
              Lat: 38.919849,
              Lon: -77.214938,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684790337,
              Timestamp_str: "2023/18/05-21:18:57"
            },
            {
              Lat: 38.917522,
              Lon: -77.217912,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689435400,
              Timestamp_str: "2023/36/07-15:36:40"
            },
            {
              Lat: 38.918671,
              Lon: -77.213892,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686712538,
              Timestamp_str: "2023/15/06-03:15:38"
            },
            {
              Lat: 38.916945,
              Lon: -77.217034,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685501212,
              Timestamp_str: "2023/46/05-02:46:52"
            },
            {
              Lat: 38.913315,
              Lon: -77.221481,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1690552750,
              Timestamp_str: "2023/59/07-13:59:10"
            },
            {
              Lat: 38.919938,
              Lon: -77.219178,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690342587,
              Timestamp_str: "2023/36/07-03:36:27"
            },
            {
              Lat: 38.915149,
              Lon: -77.217155,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684041869,
              Timestamp_str: "2023/24/05-05:24:29"
            },
            {
              Lat: 38.916067,
              Lon: -77.220534,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685270129,
              Timestamp_str: "2023/35/05-10:35:29"
            },
            {
              Lat: 38.9165,
              Lon: -77.220344,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683097234,
              Timestamp_str: "2023/00/05-07:00:34"
            },
            {
              Lat: 38.911879,
              Lon: -77.219447,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687899576,
              Timestamp_str: "2023/59/06-20:59:36"
            },
            {
              Lat: 38.912279,
              Lon: -77.217801,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684348917,
              Timestamp_str: "2023/41/05-18:41:57"
            },
            {
              Lat: 38.911174,
              Lon: -77.220592,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691388804,
              Timestamp_str: "2023/13/08-06:13:24"
            },
            {
              Lat: 38.914332,
              Lon: -77.219753,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687302442,
              Timestamp_str: "2023/07/06-23:07:22"
            },
            {
              Lat: 38.912431,
              Lon: -77.220646,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691119862,
              Timestamp_str: "2023/31/08-03:31:02"
            },
            {
              Lat: 38.912736,
              Lon: -77.213997,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689748112,
              Timestamp_str: "2023/28/07-06:28:32"
            },
            {
              Lat: 38.91713,
              Lon: -77.218772,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686970091,
              Timestamp_str: "2023/48/06-02:48:11"
            },
            {
              Lat: 38.915129,
              Lon: -77.220451,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685557238,
              Timestamp_str: "2023/20/05-18:20:38"
            },
            {
              Lat: 38.918896,
              Lon: -77.212726,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685497267,
              Timestamp_str: "2023/41/05-01:41:07"
            },
            {
              Lat: 38.915319,
              Lon: -77.219662,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683602101,
              Timestamp_str: "2023/15/05-03:15:01"
            },
            {
              Lat: 38.911111,
              Lon: -77.215044,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685733109,
              Timestamp_str: "2023/11/06-19:11:49"
            },
            {
              Lat: 38.920597,
              Lon: -77.214244,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1687657744,
              Timestamp_str: "2023/49/06-01:49:04"
            },
            {
              Lat: 38.91697,
              Lon: -77.221331,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689016999,
              Timestamp_str: "2023/23/07-19:23:19"
            },
            {
              Lat: 38.913228,
              Lon: -77.218746,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686848711,
              Timestamp_str: "2023/05/06-17:05:11"
            },
            {
              Lat: 38.912901,
              Lon: -77.214527,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691076034,
              Timestamp_str: "2023/20/08-15:20:34"
            },
            {
              Lat: 38.911742,
              Lon: -77.213863,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688576269,
              Timestamp_str: "2023/57/07-16:57:49"
            },
            {
              Lat: 38.920354,
              Lon: -77.220924,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689129255,
              Timestamp_str: "2023/34/07-02:34:15"
            },
            {
              Lat: 38.9163,
              Lon: -77.217509,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1690851208,
              Timestamp_str: "2023/53/08-00:53:28"
            },
            {
              Lat: 38.920358,
              Lon: -77.213644,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689249742,
              Timestamp_str: "2023/02/07-12:02:22"
            },
            {
              Lat: 38.913562,
              Lon: -77.215059,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689622365,
              Timestamp_str: "2023/32/07-19:32:45"
            },
            {
              Lat: 38.912739,
              Lon: -77.211952,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688489866,
              Timestamp_str: "2023/57/07-16:57:46"
            },
            {
              Lat: 38.917,
              Lon: -77.214801,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688428059,
              Timestamp_str: "2023/47/07-23:47:39"
            },
            {
              Lat: 38.918489,
              Lon: -77.214315,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691196603,
              Timestamp_str: "2023/50/08-00:50:03"
            },
            {
              Lat: 38.916196,
              Lon: -77.216101,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686632352,
              Timestamp_str: "2023/59/06-04:59:12"
            },
            {
              Lat: 38.917126,
              Lon: -77.215367,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688174991,
              Timestamp_str: "2023/29/07-01:29:51"
            },
            {
              Lat: 38.919515,
              Lon: -77.215886,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1690477333,
              Timestamp_str: "2023/02/07-17:02:13"
            },
            {
              Lat: 38.915482,
              Lon: -77.213011,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685634101,
              Timestamp_str: "2023/41/06-15:41:41"
            },
            {
              Lat: 38.914168,
              Lon: -77.214638,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1690988785,
              Timestamp_str: "2023/06/08-15:06:25"
            },
            {
              Lat: 38.918692,
              Lon: -77.213036,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685155941,
              Timestamp_str: "2023/52/05-02:52:21"
            },
            {
              Lat: 38.911374,
              Lon: -77.219775,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688862729,
              Timestamp_str: "2023/32/07-00:32:09"
            },
            {
              Lat: 38.913764,
              Lon: -77.217825,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685263289,
              Timestamp_str: "2023/41/05-08:41:29"
            },
            {
              Lat: 38.914097,
              Lon: -77.216543,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686356611,
              Timestamp_str: "2023/23/06-00:23:31"
            },
            {
              Lat: 38.918574,
              Lon: -77.219138,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684740445,
              Timestamp_str: "2023/27/05-07:27:25"
            },
            {
              Lat: 38.91419,
              Lon: -77.221005,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688983209,
              Timestamp_str: "2023/00/07-10:00:09"
            },
            {
              Lat: 38.916254,
              Lon: -77.215024,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687766301,
              Timestamp_str: "2023/58/06-07:58:21"
            },
            {
              Lat: 38.911538,
              Lon: -77.215002,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1687620616,
              Timestamp_str: "2023/30/06-15:30:16"
            },
            {
              Lat: 38.920169,
              Lon: -77.221288,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686932889,
              Timestamp_str: "2023/28/06-16:28:09"
            },
            {
              Lat: 38.912352,
              Lon: -77.220076,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686120244,
              Timestamp_str: "2023/44/06-06:44:04"
            },
            {
              Lat: 38.916947,
              Lon: -77.21295,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690100250,
              Timestamp_str: "2023/17/07-08:17:30"
            },
            {
              Lat: 38.918845,
              Lon: -77.219443,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684234224,
              Timestamp_str: "2023/50/05-10:50:24"
            },
            {
              Lat: 38.915828,
              Lon: -77.219929,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684068836,
              Timestamp_str: "2023/53/05-12:53:56"
            },
            {
              Lat: 38.918697,
              Lon: -77.219109,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689972591,
              Timestamp_str: "2023/49/07-20:49:51"
            },
            {
              Lat: 38.917001,
              Lon: -77.219513,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686407139,
              Timestamp_str: "2023/25/06-14:25:39"
            },
            {
              Lat: 38.919951,
              Lon: -77.2169,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685050272,
              Timestamp_str: "2023/31/05-21:31:12"
            },
            {
              Lat: 38.919184,
              Lon: -77.212576,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690441803,
              Timestamp_str: "2023/10/07-07:10:03"
            },
            {
              Lat: 38.911634,
              Lon: -77.21178,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687756496,
              Timestamp_str: "2023/14/06-05:14:56"
            },
            {
              Lat: 38.915633,
              Lon: -77.220988,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684265968,
              Timestamp_str: "2023/39/05-19:39:28"
            },
            {
              Lat: 38.917428,
              Lon: -77.217391,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690562672,
              Timestamp_str: "2023/44/07-16:44:32"
            },
            {
              Lat: 38.912871,
              Lon: -77.220544,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688706919,
              Timestamp_str: "2023/15/07-05:15:19"
            },
            {
              Lat: 38.915986,
              Lon: -77.219698,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689052261,
              Timestamp_str: "2023/11/07-05:11:01"
            },
            {
              Lat: 38.920616,
              Lon: -77.213603,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688059604,
              Timestamp_str: "2023/26/06-17:26:44"
            },
            {
              Lat: 38.920366,
              Lon: -77.214212,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684421037,
              Timestamp_str: "2023/43/05-14:43:57"
            },
            {
              Lat: 38.915089,
              Lon: -77.21615,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685386863,
              Timestamp_str: "2023/01/05-19:01:03"
            },
            {
              Lat: 38.918311,
              Lon: -77.218063,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690408313,
              Timestamp_str: "2023/51/07-21:51:53"
            },
            {
              Lat: 38.917269,
              Lon: -77.218578,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689220373,
              Timestamp_str: "2023/52/07-03:52:53"
            },
            {
              Lat: 38.916651,
              Lon: -77.215114,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1689974997,
              Timestamp_str: "2023/29/07-21:29:57"
            },
            {
              Lat: 38.918074,
              Lon: -77.214993,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685602013,
              Timestamp_str: "2023/46/06-06:46:53"
            },
            {
              Lat: 38.920574,
              Lon: -77.216419,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686409710,
              Timestamp_str: "2023/08/06-15:08:30"
            },
            {
              Lat: 38.917558,
              Lon: -77.22144,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691279924,
              Timestamp_str: "2023/58/08-23:58:44"
            },
            {
              Lat: 38.911749,
              Lon: -77.217539,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685636407,
              Timestamp_str: "2023/20/06-16:20:07"
            },
            {
              Lat: 38.912726,
              Lon: -77.216915,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1689978057,
              Timestamp_str: "2023/20/07-22:20:57"
            },
            {
              Lat: 38.911823,
              Lon: -77.212295,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685111372,
              Timestamp_str: "2023/29/05-14:29:32"
            },
            {
              Lat: 38.912336,
              Lon: -77.221325,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689809956,
              Timestamp_str: "2023/39/07-23:39:16"
            },
            {
              Lat: 38.919845,
              Lon: -77.216236,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690083379,
              Timestamp_str: "2023/36/07-03:36:19"
            },
            {
              Lat: 38.916304,
              Lon: -77.219049,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687182887,
              Timestamp_str: "2023/54/06-13:54:47"
            },
            {
              Lat: 38.91884,
              Lon: -77.218891,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1683794647,
              Timestamp_str: "2023/44/05-08:44:07"
            },
            {
              Lat: 38.918597,
              Lon: -77.218369,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685829564,
              Timestamp_str: "2023/59/06-21:59:24"
            },
            {
              Lat: 38.911565,
              Lon: -77.218657,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688371088,
              Timestamp_str: "2023/58/07-07:58:08"
            },
            {
              Lat: 38.917142,
              Lon: -77.219944,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687400071,
              Timestamp_str: "2023/14/06-02:14:31"
            },
            {
              Lat: 38.916687,
              Lon: -77.212316,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689386993,
              Timestamp_str: "2023/09/07-02:09:53"
            },
            {
              Lat: 38.915872,
              Lon: -77.21872,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685264663,
              Timestamp_str: "2023/04/05-09:04:23"
            },
            {
              Lat: 38.918203,
              Lon: -77.217855,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683718864,
              Timestamp_str: "2023/41/05-11:41:04"
            },
            {
              Lat: 38.910985,
              Lon: -77.216853,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687148818,
              Timestamp_str: "2023/26/06-04:26:58"
            },
            {
              Lat: 38.915616,
              Lon: -77.212948,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686153178,
              Timestamp_str: "2023/52/06-15:52:58"
            },
            {
              Lat: 38.913532,
              Lon: -77.212079,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689081645,
              Timestamp_str: "2023/20/07-13:20:45"
            },
            {
              Lat: 38.916819,
              Lon: -77.220823,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686329260,
              Timestamp_str: "2023/47/06-16:47:40"
            },
            {
              Lat: 38.91353,
              Lon: -77.221143,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685819173,
              Timestamp_str: "2023/06/06-19:06:13"
            },
            {
              Lat: 38.91992,
              Lon: -77.220825,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686567068,
              Timestamp_str: "2023/51/06-10:51:08"
            },
            {
              Lat: 38.919735,
              Lon: -77.212492,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684389652,
              Timestamp_str: "2023/00/05-06:00:52"
            },
            {
              Lat: 38.911006,
              Lon: -77.219326,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685758868,
              Timestamp_str: "2023/21/06-02:21:08"
            },
            {
              Lat: 38.91171,
              Lon: -77.219138,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690959895,
              Timestamp_str: "2023/04/08-07:04:55"
            },
            {
              Lat: 38.916816,
              Lon: -77.219026,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683285877,
              Timestamp_str: "2023/24/05-11:24:37"
            },
            {
              Lat: 38.919984,
              Lon: -77.213009,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684603790,
              Timestamp_str: "2023/29/05-17:29:50"
            },
            {
              Lat: 38.913583,
              Lon: -77.214046,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685055340,
              Timestamp_str: "2023/55/05-22:55:40"
            },
            {
              Lat: 38.913629,
              Lon: -77.212377,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691331689,
              Timestamp_str: "2023/21/08-14:21:29"
            },
            {
              Lat: 38.916882,
              Lon: -77.211929,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688270114,
              Timestamp_str: "2023/55/07-03:55:14"
            },
            {
              Lat: 38.912986,
              Lon: -77.212463,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683001048,
              Timestamp_str: "2023/17/05-04:17:28"
            },
            {
              Lat: 38.916742,
              Lon: -77.218688,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683525987,
              Timestamp_str: "2023/06/05-06:06:27"
            },
            {
              Lat: 38.915568,
              Lon: -77.219234,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690873046,
              Timestamp_str: "2023/57/08-06:57:26"
            },
            {
              Lat: 38.915189,
              Lon: -77.217002,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688204110,
              Timestamp_str: "2023/35/07-09:35:10"
            },
            {
              Lat: 38.914116,
              Lon: -77.215564,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687028504,
              Timestamp_str: "2023/01/06-19:01:44"
            },
            {
              Lat: 38.917932,
              Lon: -77.212503,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689868248,
              Timestamp_str: "2023/50/07-15:50:48"
            },
            {
              Lat: 38.919051,
              Lon: -77.217365,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690835779,
              Timestamp_str: "2023/36/07-20:36:19"
            },
            {
              Lat: 38.917716,
              Lon: -77.214666,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688203026,
              Timestamp_str: "2023/17/07-09:17:06"
            },
            {
              Lat: 38.91271,
              Lon: -77.212784,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1683678822,
              Timestamp_str: "2023/33/05-00:33:42"
            },
            {
              Lat: 38.918332,
              Lon: -77.215945,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1687819333,
              Timestamp_str: "2023/42/06-22:42:13"
            },
            {
              Lat: 38.912227,
              Lon: -77.220672,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684357371,
              Timestamp_str: "2023/02/05-21:02:51"
            },
            {
              Lat: 38.913197,
              Lon: -77.221397,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689538238,
              Timestamp_str: "2023/10/07-20:10:38"
            },
            {
              Lat: 38.919924,
              Lon: -77.21916,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689403499,
              Timestamp_str: "2023/44/07-06:44:59"
            },
            {
              Lat: 38.911106,
              Lon: -77.216489,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685665475,
              Timestamp_str: "2023/24/06-00:24:35"
            },
            {
              Lat: 38.918674,
              Lon: -77.215275,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688780333,
              Timestamp_str: "2023/38/07-01:38:53"
            },
            {
              Lat: 38.920667,
              Lon: -77.219114,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684218485,
              Timestamp_str: "2023/28/05-06:28:05"
            },
            {
              Lat: 38.915515,
              Lon: -77.216389,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691178378,
              Timestamp_str: "2023/46/08-19:46:18"
            },
            {
              Lat: 38.916512,
              Lon: -77.221345,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690178097,
              Timestamp_str: "2023/54/07-05:54:57"
            },
            {
              Lat: 38.920136,
              Lon: -77.213581,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1689831592,
              Timestamp_str: "2023/39/07-05:39:52"
            },
            {
              Lat: 38.914132,
              Lon: -77.214544,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688081332,
              Timestamp_str: "2023/28/06-23:28:52"
            },
            {
              Lat: 38.915659,
              Lon: -77.220547,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690141873,
              Timestamp_str: "2023/51/07-19:51:13"
            },
            {
              Lat: 38.914251,
              Lon: -77.219842,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690829849,
              Timestamp_str: "2023/57/07-18:57:29"
            },
            {
              Lat: 38.913945,
              Lon: -77.217557,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689940223,
              Timestamp_str: "2023/50/07-11:50:23"
            },
            {
              Lat: 38.920141,
              Lon: -77.21515,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684576766,
              Timestamp_str: "2023/59/05-09:59:26"
            },
            {
              Lat: 38.912652,
              Lon: -77.213692,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686792635,
              Timestamp_str: "2023/30/06-01:30:35"
            },
            {
              Lat: 38.917865,
              Lon: -77.214315,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689106970,
              Timestamp_str: "2023/22/07-20:22:50"
            },
            {
              Lat: 38.911185,
              Lon: -77.219867,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683688687,
              Timestamp_str: "2023/18/05-03:18:07"
            },
            {
              Lat: 38.912198,
              Lon: -77.218472,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688405214,
              Timestamp_str: "2023/26/07-17:26:54"
            },
            {
              Lat: 38.914082,
              Lon: -77.217143,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1683178238,
              Timestamp_str: "2023/30/05-05:30:38"
            },
            {
              Lat: 38.913765,
              Lon: -77.220899,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685825809,
              Timestamp_str: "2023/56/06-20:56:49"
            },
            {
              Lat: 38.912545,
              Lon: -77.213556,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684238981,
              Timestamp_str: "2023/09/05-12:09:41"
            },
            {
              Lat: 38.918551,
              Lon: -77.217049,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690370022,
              Timestamp_str: "2023/13/07-11:13:42"
            },
            {
              Lat: 38.913814,
              Lon: -77.217284,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687767994,
              Timestamp_str: "2023/26/06-08:26:34"
            },
            {
              Lat: 38.916113,
              Lon: -77.218413,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687992297,
              Timestamp_str: "2023/44/06-22:44:57"
            },
            {
              Lat: 38.911995,
              Lon: -77.219751,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686970666,
              Timestamp_str: "2023/57/06-02:57:46"
            },
            {
              Lat: 38.913807,
              Lon: -77.220183,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687195134,
              Timestamp_str: "2023/18/06-17:18:54"
            },
            {
              Lat: 38.917906,
              Lon: -77.217477,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683348479,
              Timestamp_str: "2023/47/05-04:47:59"
            },
            {
              Lat: 38.916183,
              Lon: -77.214932,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690261842,
              Timestamp_str: "2023/10/07-05:10:42"
            },
            {
              Lat: 38.916206,
              Lon: -77.213337,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687031646,
              Timestamp_str: "2023/54/06-19:54:06"
            },
            {
              Lat: 38.911279,
              Lon: -77.215513,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688031624,
              Timestamp_str: "2023/40/06-09:40:24"
            },
            {
              Lat: 38.91497,
              Lon: -77.221462,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685454408,
              Timestamp_str: "2023/46/05-13:46:48"
            },
            {
              Lat: 38.912209,
              Lon: -77.21563,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685174908,
              Timestamp_str: "2023/08/05-08:08:28"
            },
            {
              Lat: 38.911048,
              Lon: -77.212235,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690409522,
              Timestamp_str: "2023/12/07-22:12:02"
            },
            {
              Lat: 38.910869,
              Lon: -77.216342,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684208569,
              Timestamp_str: "2023/42/05-03:42:49"
            },
            {
              Lat: 38.913776,
              Lon: -77.213698,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688482406,
              Timestamp_str: "2023/53/07-14:53:26"
            },
            {
              Lat: 38.919278,
              Lon: -77.221293,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688883586,
              Timestamp_str: "2023/19/07-06:19:46"
            },
            {
              Lat: 38.92004,
              Lon: -77.216151,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689889852,
              Timestamp_str: "2023/50/07-21:50:52"
            },
            {
              Lat: 38.913881,
              Lon: -77.218422,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684770213,
              Timestamp_str: "2023/43/05-15:43:33"
            },
            {
              Lat: 38.92058,
              Lon: -77.220872,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687428984,
              Timestamp_str: "2023/16/06-10:16:24"
            },
            {
              Lat: 38.913049,
              Lon: -77.214524,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1690234985,
              Timestamp_str: "2023/43/07-21:43:05"
            },
            {
              Lat: 38.914767,
              Lon: -77.216382,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688232280,
              Timestamp_str: "2023/24/07-17:24:40"
            },
            {
              Lat: 38.914536,
              Lon: -77.217417,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686284646,
              Timestamp_str: "2023/24/06-04:24:06"
            },
            {
              Lat: 38.919074,
              Lon: -77.213175,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689861739,
              Timestamp_str: "2023/02/07-14:02:19"
            },
            {
              Lat: 38.92021,
              Lon: -77.220953,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690606135,
              Timestamp_str: "2023/48/07-04:48:55"
            },
            {
              Lat: 38.913466,
              Lon: -77.214541,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686457963,
              Timestamp_str: "2023/32/06-04:32:43"
            },
            {
              Lat: 38.92052,
              Lon: -77.216004,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686395361,
              Timestamp_str: "2023/09/06-11:09:21"
            },
            {
              Lat: 38.919938,
              Lon: -77.21615,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689150080,
              Timestamp_str: "2023/21/07-08:21:20"
            },
            {
              Lat: 38.912671,
              Lon: -77.215896,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686492896,
              Timestamp_str: "2023/14/06-14:14:56"
            },
            {
              Lat: 38.917776,
              Lon: -77.21681,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691392168,
              Timestamp_str: "2023/09/08-07:09:28"
            },
            {
              Lat: 38.913059,
              Lon: -77.219603,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1687735246,
              Timestamp_str: "2023/20/06-23:20:46"
            },
            {
              Lat: 38.914824,
              Lon: -77.218777,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689873259,
              Timestamp_str: "2023/14/07-17:14:19"
            },
            {
              Lat: 38.91869,
              Lon: -77.221352,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688606164,
              Timestamp_str: "2023/16/07-01:16:04"
            },
            {
              Lat: 38.919295,
              Lon: -77.212761,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689270586,
              Timestamp_str: "2023/49/07-17:49:46"
            },
            {
              Lat: 38.919127,
              Lon: -77.217746,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688467321,
              Timestamp_str: "2023/42/07-10:42:01"
            },
            {
              Lat: 38.914397,
              Lon: -77.22078,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689638229,
              Timestamp_str: "2023/57/07-23:57:09"
            },
            {
              Lat: 38.916649,
              Lon: -77.218835,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683424264,
              Timestamp_str: "2023/51/05-01:51:04"
            },
            {
              Lat: 38.916244,
              Lon: -77.215627,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683996116,
              Timestamp_str: "2023/41/05-16:41:56"
            },
            {
              Lat: 38.912729,
              Lon: -77.218642,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684687389,
              Timestamp_str: "2023/43/05-16:43:09"
            },
            {
              Lat: 38.9179,
              Lon: -77.216068,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688136673,
              Timestamp_str: "2023/51/06-14:51:13"
            },
            {
              Lat: 38.920212,
              Lon: -77.216513,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684189729,
              Timestamp_str: "2023/28/05-22:28:49"
            },
            {
              Lat: 38.913363,
              Lon: -77.214203,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683498092,
              Timestamp_str: "2023/21/05-22:21:32"
            },
            {
              Lat: 38.915448,
              Lon: -77.220799,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689108890,
              Timestamp_str: "2023/54/07-20:54:50"
            },
            {
              Lat: 38.912698,
              Lon: -77.214916,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690512237,
              Timestamp_str: "2023/43/07-02:43:57"
            },
            {
              Lat: 38.913259,
              Lon: -77.221002,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1691325487,
              Timestamp_str: "2023/38/08-12:38:07"
            },
            {
              Lat: 38.918294,
              Lon: -77.219578,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685678930,
              Timestamp_str: "2023/08/06-04:08:50"
            },
            {
              Lat: 38.92079,
              Lon: -77.213698,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684590445,
              Timestamp_str: "2023/47/05-13:47:25"
            },
            {
              Lat: 38.917414,
              Lon: -77.211858,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683019364,
              Timestamp_str: "2023/22/05-09:22:44"
            },
            {
              Lat: 38.913506,
              Lon: -77.219644,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689935250,
              Timestamp_str: "2023/27/07-10:27:30"
            },
            {
              Lat: 38.912416,
              Lon: -77.21921,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685911166,
              Timestamp_str: "2023/39/06-20:39:26"
            },
            {
              Lat: 38.913466,
              Lon: -77.214825,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687585432,
              Timestamp_str: "2023/43/06-05:43:52"
            },
            {
              Lat: 38.919775,
              Lon: -77.217776,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685262659,
              Timestamp_str: "2023/30/05-08:30:59"
            },
            {
              Lat: 38.912371,
              Lon: -77.221112,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1690332621,
              Timestamp_str: "2023/50/07-00:50:21"
            },
            {
              Lat: 38.91392,
              Lon: -77.218696,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684911127,
              Timestamp_str: "2023/52/05-06:52:07"
            },
            {
              Lat: 38.91901,
              Lon: -77.219712,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688948865,
              Timestamp_str: "2023/27/07-00:27:45"
            },
            {
              Lat: 38.92016,
              Lon: -77.217241,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684782836,
              Timestamp_str: "2023/13/05-19:13:56"
            },
            {
              Lat: 38.912776,
              Lon: -77.213332,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689820605,
              Timestamp_str: "2023/36/07-02:36:45"
            },
            {
              Lat: 38.919952,
              Lon: -77.2187,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690473207,
              Timestamp_str: "2023/53/07-15:53:27"
            },
            {
              Lat: 38.920506,
              Lon: -77.220446,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1687509717,
              Timestamp_str: "2023/41/06-08:41:57"
            },
            {
              Lat: 38.91931,
              Lon: -77.215511,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684836960,
              Timestamp_str: "2023/16/05-10:16:00"
            },
            {
              Lat: 38.919768,
              Lon: -77.215965,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1684601609,
              Timestamp_str: "2023/53/05-16:53:29"
            },
            {
              Lat: 38.912229,
              Lon: -77.213876,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687435034,
              Timestamp_str: "2023/57/06-11:57:14"
            },
            {
              Lat: 38.918696,
              Lon: -77.218197,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1683295270,
              Timestamp_str: "2023/01/05-14:01:10"
            },
            {
              Lat: 38.915418,
              Lon: -77.213519,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683917186,
              Timestamp_str: "2023/46/05-18:46:26"
            },
            {
              Lat: 38.913821,
              Lon: -77.216699,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687759575,
              Timestamp_str: "2023/06/06-06:06:15"
            },
            {
              Lat: 38.920544,
              Lon: -77.218122,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687474591,
              Timestamp_str: "2023/56/06-22:56:31"
            },
            {
              Lat: 38.918458,
              Lon: -77.216383,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689310449,
              Timestamp_str: "2023/54/07-04:54:09"
            },
            {
              Lat: 38.91958,
              Lon: -77.214021,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686258142,
              Timestamp_str: "2023/02/06-21:02:22"
            },
            {
              Lat: 38.914789,
              Lon: -77.214508,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688991512,
              Timestamp_str: "2023/18/07-12:18:32"
            },
            {
              Lat: 38.914458,
              Lon: -77.218475,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683599637,
              Timestamp_str: "2023/33/05-02:33:57"
            },
            {
              Lat: 38.917306,
              Lon: -77.217435,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686401449,
              Timestamp_str: "2023/50/06-12:50:49"
            },
            {
              Lat: 38.914706,
              Lon: -77.213605,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686578992,
              Timestamp_str: "2023/09/06-14:09:52"
            },
            {
              Lat: 38.916993,
              Lon: -77.212145,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684952398,
              Timestamp_str: "2023/19/05-18:19:58"
            },
            {
              Lat: 38.91628,
              Lon: -77.213288,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685762170,
              Timestamp_str: "2023/16/06-03:16:10"
            },
            {
              Lat: 38.919951,
              Lon: -77.212471,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688105839,
              Timestamp_str: "2023/17/06-06:17:19"
            },
            {
              Lat: 38.918887,
              Lon: -77.213654,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683149932,
              Timestamp_str: "2023/38/05-21:38:52"
            },
            {
              Lat: 38.914606,
              Lon: -77.215183,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685206259,
              Timestamp_str: "2023/50/05-16:50:59"
            },
            {
              Lat: 38.915336,
              Lon: -77.216755,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685955182,
              Timestamp_str: "2023/53/06-08:53:02"
            },
            {
              Lat: 38.913314,
              Lon: -77.214987,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689734268,
              Timestamp_str: "2023/37/07-02:37:48"
            },
            {
              Lat: 38.914314,
              Lon: -77.216709,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686487404,
              Timestamp_str: "2023/43/06-12:43:24"
            },
            {
              Lat: 38.911485,
              Lon: -77.211587,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684840128,
              Timestamp_str: "2023/08/05-11:08:48"
            },
            {
              Lat: 38.915448,
              Lon: -77.215573,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686678076,
              Timestamp_str: "2023/41/06-17:41:16"
            },
            {
              Lat: 38.916373,
              Lon: -77.2121,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683122732,
              Timestamp_str: "2023/05/05-14:05:32"
            },
            {
              Lat: 38.91558,
              Lon: -77.22129,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1683905204,
              Timestamp_str: "2023/26/05-15:26:44"
            },
            {
              Lat: 38.916997,
              Lon: -77.220001,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687615443,
              Timestamp_str: "2023/04/06-14:04:03"
            },
            {
              Lat: 38.91762,
              Lon: -77.218051,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688410129,
              Timestamp_str: "2023/48/07-18:48:49"
            },
            {
              Lat: 38.914006,
              Lon: -77.213019,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1683729060,
              Timestamp_str: "2023/31/05-14:31:00"
            },
            {
              Lat: 38.915448,
              Lon: -77.215465,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687555225,
              Timestamp_str: "2023/20/06-21:20:25"
            },
            {
              Lat: 38.917737,
              Lon: -77.221272,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683142480,
              Timestamp_str: "2023/34/05-19:34:40"
            },
            {
              Lat: 38.920183,
              Lon: -77.219997,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685834127,
              Timestamp_str: "2023/15/06-23:15:27"
            },
            {
              Lat: 38.912474,
              Lon: -77.215561,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686199449,
              Timestamp_str: "2023/44/06-04:44:09"
            },
            {
              Lat: 38.916167,
              Lon: -77.214836,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684925660,
              Timestamp_str: "2023/54/05-10:54:20"
            },
            {
              Lat: 38.920408,
              Lon: -77.211813,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1689589124,
              Timestamp_str: "2023/18/07-10:18:44"
            },
            {
              Lat: 38.911895,
              Lon: -77.213548,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685256522,
              Timestamp_str: "2023/48/05-06:48:42"
            },
            {
              Lat: 38.912269,
              Lon: -77.217249,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687382719,
              Timestamp_str: "2023/25/06-21:25:19"
            },
            {
              Lat: 38.917546,
              Lon: -77.212125,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690600741,
              Timestamp_str: "2023/19/07-03:19:01"
            },
            {
              Lat: 38.913663,
              Lon: -77.215225,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688145545,
              Timestamp_str: "2023/19/06-17:19:05"
            },
            {
              Lat: 38.919361,
              Lon: -77.213986,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685969453,
              Timestamp_str: "2023/50/06-12:50:53"
            },
            {
              Lat: 38.912519,
              Lon: -77.213497,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690063817,
              Timestamp_str: "2023/10/07-22:10:17"
            },
            {
              Lat: 38.912217,
              Lon: -77.218044,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1683955028,
              Timestamp_str: "2023/17/05-05:17:08"
            },
            {
              Lat: 38.916768,
              Lon: -77.214143,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690746897,
              Timestamp_str: "2023/54/07-19:54:57"
            },
            {
              Lat: 38.912875,
              Lon: -77.213849,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687101297,
              Timestamp_str: "2023/14/06-15:14:57"
            },
            {
              Lat: 38.9136,
              Lon: -77.216462,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691475908,
              Timestamp_str: "2023/25/08-06:25:08"
            },
            {
              Lat: 38.918429,
              Lon: -77.215121,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1685335492,
              Timestamp_str: "2023/44/05-04:44:52"
            },
            {
              Lat: 38.912717,
              Lon: -77.220573,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691457810,
              Timestamp_str: "2023/23/08-01:23:30"
            },
            {
              Lat: 38.918344,
              Lon: -77.218366,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686876153,
              Timestamp_str: "2023/42/06-00:42:33"
            },
            {
              Lat: 38.917405,
              Lon: -77.221229,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689147950,
              Timestamp_str: "2023/45/07-07:45:50"
            },
            {
              Lat: 38.917351,
              Lon: -77.212981,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688203256,
              Timestamp_str: "2023/20/07-09:20:56"
            },
            {
              Lat: 38.911467,
              Lon: -77.216436,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685020521,
              Timestamp_str: "2023/15/05-13:15:21"
            },
            {
              Lat: 38.918757,
              Lon: -77.216699,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1688702497,
              Timestamp_str: "2023/01/07-04:01:37"
            },
            {
              Lat: 38.917009,
              Lon: -77.215383,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689042132,
              Timestamp_str: "2023/22/07-02:22:12"
            },
            {
              Lat: 38.920477,
              Lon: -77.217542,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688634574,
              Timestamp_str: "2023/09/07-09:09:34"
            },
            {
              Lat: 38.918651,
              Lon: -77.214138,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688990347,
              Timestamp_str: "2023/59/07-11:59:07"
            },
            {
              Lat: 38.914775,
              Lon: -77.215448,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684132393,
              Timestamp_str: "2023/33/05-06:33:13"
            },
            {
              Lat: 38.917814,
              Lon: -77.211985,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686940357,
              Timestamp_str: "2023/32/06-18:32:37"
            },
            {
              Lat: 38.913703,
              Lon: -77.215548,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684138007,
              Timestamp_str: "2023/06/05-08:06:47"
            },
            {
              Lat: 38.919952,
              Lon: -77.214467,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1689141468,
              Timestamp_str: "2023/57/07-05:57:48"
            },
            {
              Lat: 38.920158,
              Lon: -77.211925,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1686877349,
              Timestamp_str: "2023/02/06-01:02:29"
            },
            {
              Lat: 38.912115,
              Lon: -77.219758,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688679876,
              Timestamp_str: "2023/44/07-21:44:36"
            },
            {
              Lat: 38.916659,
              Lon: -77.214726,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1688287736,
              Timestamp_str: "2023/48/07-08:48:56"
            },
            {
              Lat: 38.919623,
              Lon: -77.217822,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1685152364,
              Timestamp_str: "2023/52/05-01:52:44"
            },
            {
              Lat: 38.912884,
              Lon: -77.220568,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687225528,
              Timestamp_str: "2023/45/06-01:45:28"
            },
            {
              Lat: 38.920243,
              Lon: -77.213621,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684900839,
              Timestamp_str: "2023/00/05-04:00:39"
            },
            {
              Lat: 38.918259,
              Lon: -77.219677,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1691054197,
              Timestamp_str: "2023/16/08-09:16:37"
            },
            {
              Lat: 38.913599,
              Lon: -77.211725,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683657239,
              Timestamp_str: "2023/33/05-18:33:59"
            },
            {
              Lat: 38.916146,
              Lon: -77.211656,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688934101,
              Timestamp_str: "2023/21/07-20:21:41"
            },
            {
              Lat: 38.917492,
              Lon: -77.221378,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1684198161,
              Timestamp_str: "2023/49/05-00:49:21"
            },
            {
              Lat: 38.9197,
              Lon: -77.214203,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1689464772,
              Timestamp_str: "2023/46/07-23:46:12"
            },
            {
              Lat: 38.916225,
              Lon: -77.217347,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1683155961,
              Timestamp_str: "2023/19/05-23:19:21"
            },
            {
              Lat: 38.911042,
              Lon: -77.215826,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1685196535,
              Timestamp_str: "2023/08/05-14:08:55"
            },
            {
              Lat: 38.917878,
              Lon: -77.218141,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687765445,
              Timestamp_str: "2023/44/06-07:44:05"
            },
            {
              Lat: 38.915161,
              Lon: -77.218171,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684671019,
              Timestamp_str: "2023/10/05-12:10:19"
            },
            {
              Lat: 38.91398,
              Lon: -77.215354,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684140965,
              Timestamp_str: "2023/56/05-08:56:05"
            },
            {
              Lat: 38.918752,
              Lon: -77.218312,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1687883773,
              Timestamp_str: "2023/36/06-16:36:13"
            },
            {
              Lat: 38.913261,
              Lon: -77.214483,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684633314,
              Timestamp_str: "2023/41/05-01:41:54"
            },
            {
              Lat: 38.91972,
              Lon: -77.220188,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1686827870,
              Timestamp_str: "2023/17/06-11:17:50"
            },
            {
              Lat: 38.919229,
              Lon: -77.212067,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1684077772,
              Timestamp_str: "2023/22/05-15:22:52"
            },
            {
              Lat: 38.913983,
              Lon: -77.214358,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1686273619,
              Timestamp_str: "2023/20/06-01:20:19"
            },
            {
              Lat: 38.917301,
              Lon: -77.216033,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687398822,
              Timestamp_str: "2023/53/06-01:53:42"
            },
            {
              Lat: 38.915763,
              Lon: -77.218172,
              Level: "Ground",
              Type: "Type2",
              Timestamp: 1684434846,
              Timestamp_str: "2023/34/05-18:34:06"
            },
            {
              Lat: 38.911063,
              Lon: -77.212644,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1687853286,
              Timestamp_str: "2023/08/06-08:08:06"
            },
            {
              Lat: 38.911137,
              Lon: -77.220383,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1688012720,
              Timestamp_str: "2023/25/06-04:25:20"
            },
            {
              Lat: 38.910937,
              Lon: -77.221248,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1687451913,
              Timestamp_str: "2023/38/06-16:38:33"
            },
            {
              Lat: 38.918154,
              Lon: -77.220188,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686517875,
              Timestamp_str: "2023/11/06-21:11:15"
            },
            {
              Lat: 38.920813,
              Lon: -77.21999,
              Level: "Ground",
              Type: "Type3",
              Timestamp: 1686627675,
              Timestamp_str: "2023/41/06-03:41:15"
            },
            {
              Lat: 38.917007,
              Lon: -77.214575,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688879224,
              Timestamp_str: "2023/07/07-05:07:04"
            },
            {
              Lat: 38.918332,
              Lon: -77.218959,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690450568,
              Timestamp_str: "2023/36/07-09:36:08"
            },
            {
              Lat: 38.919396,
              Lon: -77.220652,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1691460036,
              Timestamp_str: "2023/00/08-02:00:36"
            },
            {
              Lat: 38.913192,
              Lon: -77.220409,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1685029487,
              Timestamp_str: "2023/44/05-15:44:47"
            },
            {
              Lat: 38.91194,
              Lon: -77.219743,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1690011738,
              Timestamp_str: "2023/42/07-07:42:18"
            },
            {
              Lat: 38.9146,
              Lon: -77.221026,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1688949857,
              Timestamp_str: "2023/44/07-00:44:17"
            },
            {
              Lat: 38.918442,
              Lon: -77.217891,
              Level: "Ground",
              Type: "Type0",
              Timestamp: 1687657309,
              Timestamp_str: "2023/41/06-01:41:49"
            },
            {
              Lat: 38.915195,
              Lon: -77.214212,
              Level: "Ground",
              Type: "Type1",
              Timestamp: 1690706525,
              Timestamp_str: "2023/42/07-08:42:05"
            }
          ]
        };
        resolve(dummyData); // Resolving the Promise with dummyData
      }, 1000); // Simulating a 1-second delay
    });

    fetchData
      .then((data) => {
        setData(data);
        console.log(data, "test");
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });

    // const instance = axios.create({
    //     withCredentials: true,
    //     baseURL: api_url,
    // {auth: JSON.stringify({
    //         username: "maptest",
    //         password: "zdXfLkerHkt2Bxb"
    //       })}
    //  })
    //   await instance
    //     .get('/v1/mappoints')
    //     .then((response) => {
    //       console.log(response, "test");
    //       if (newData) setData(newData);
    //     }); // getting cross orgin error hence commented the code.
  };

  useEffect(() => {
    callApiData();
  }, []);
  return (
    <div
      style={{ width: "200vh", height: "200vh", zIndex: 9999 }}
      className="map-component"
    >
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 0,
          bearing: 0,
          pitch: 0
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        // accessToken={token}
        mapboxAccessToken="pk.eyJ1IjoiYWlzaHVyZWRkeTkiLCJhIjoiY2xsOXloNGh0MTR3ajNrdGprYnZlNDJteCJ9.u-cNsghm6-FizkXKdWbnCg"
      >

        {data?.Points.map(function (val, index) {
          return (
            <Marker
              key={`marker-${index}`}
              longitude={val.Lon}
              latitude={val.Lat}
              anchor="bottom"
              onClick={(e) => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                setPopupInfo(val);
              }}
            >
              <Pin type = {val.Type} size = {20}/>
            </Marker>
          )
        })
        }
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.Lon}
            latitude={popupInfo.Lat}
            onClose={() => setPopupInfo(null)}
          >
            <div>{popupInfo.Type}</div>
            <div>{popupInfo.Timestamp_str}</div>
          </Popup>
        )}
        <NavigationControl />
        <ScaleControl />
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
      </Map>
    </div>
  );
};

export default MapComponent;
