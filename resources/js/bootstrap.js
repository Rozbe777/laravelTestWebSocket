window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '2022',
//     wsHost: '192.168.0.239',
//     wsPort: 6001,
//     forceTLS: false,
//     authEndpoint: 'http://192.168.0.239:8001/broadcasting/auth',
//     auth: {
//         headers: {
//             Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NmIwMzA0NS1hOWRjLTRiYjMtOWIxMi0zODYwYzRhZDc0ODYiLCJqdGkiOiI4OGZiNmRhYTU3ZGE1MTAyMWE3YmNkNjQyNWY5NWRjYzc0YmNhYmVkNTg0OGE3YmNhNjIzNTdiNmE1M2RiNDJjYjQ3MzdlMDIwYjdlNDM2ZCIsImlhdCI6MTY1ODMxMDY3Mi44ODExMDksIm5iZiI6MTY1ODMxMDY3Mi44ODExMSwiZXhwIjoxNjU4MzE3ODcyLjgxMTk3LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.t1DEPNGvJn_l6xSllTvglvPfXln00fMdHWOnMhIYbtfEDqAaAx9qurYK2kTQqwF1pHIRk_KUD0RT6MoJ3b3oDhgBrIiiCiTIPekEADPxYFUIBkaqjeAothy_zuO--v9VQ2deSHsvYytlOaPj8Zm2S_Hvzcc6U0nhxbfiEhdIILJO25RmxHVqcs3kiGLbWw84FVVN_3FElobikR4OoFh0ay0BeCPArMmf0yvYsp1XiUzaRC6kymmrr6DeXll6fp-Y-3boEH0jX_xT1TVTnuca6kGCMg2BZf3uTfu5m1uMqaMX0jertVH08woZ0YQE4kWJVGbLP-8hDgQy-CzP240MKYJPKrjVDPsOYUl_nJBgC3oZSScPyeeu9HoaIwOX-Ylzwy9MU7a3SXsvJXv0SuXDV34nvpi8pl-Y8DNIHsHUAAFDpQ0m5uyEVo4275hqp4vwyh8_peDpPB86SMawQFq0C8jELDUcrvevcllaefwB7roJ8NEUzk--pIhQJk62Cnx4PkqOjXK82Eogx6kk541fk3rh7rDoZ4EfY9dvhnbRVBK9rzH-30seEes17CrHKxC6u2_vOQZtZPRDsCkEAZX6kz1ef67RerPhWunA8OFDvbO3tyOGrlfIy5ygG8MdRK9AHPMA8hq1qHwsH0fcZJu1MRfP9KDHzs71AgAx_8oFnlU'
//         }
//     }
// });

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '2022',
    wsHost: 'ws.milyoonex.com',
    forceTLS: true,
    authEndpoint: 'https://api.milyoonex.com/broadcasting/auth',
    auth: {
        headers: {
            Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NmNjZjk5Ni1hMmY2LTQxNDMtOGJlZi01ZjA2MGRiMzkwNWQiLCJqdGkiOiJkMDhmMzZkN2QwMjM3ZGRiOGU4NGU5MDBiMTMxNTBkNjA5NDY5YmMxNzE0MjVmMThlYjQwNzdhY2NmMmRiY2UxZTUzMjJhNzI0MmZhMGFmNiIsImlhdCI6MTY1ODMwOTg0Ni43MTQzODEsIm5iZiI6MTY1ODMwOTg0Ni43MTQzODMsImV4cCI6MTY1ODMxNzA0Ni43MDE2OTcsInN1YiI6IjEiLCJzY29wZXMiOlsiKiJdfQ.RtqqDO1VjFNKuijAZtw5rew0BhuWSSyI6sT1lUnRNTiP_F1gJNWBYud7gGEXPlu7x5C8RKO5oDwwBV-FVIeO_2q0gMeDluJKHMbQ6ZZTPJfr_NnVvwBV32oFFsayf-GNHHdmIz1n800yofzZmc-L3SG4ReoE-FU9R8y6tM_sYnYyLVg7Wir_0VRPFppnyVJiD51MzVfIgeOMYRp5zvy8YUvS_-aAJmAbExNUA8EYpfUGrmlPz4XaoyPApi10WnztUR42N3RKGYYatI4YyxR0-Q7d5yTF3vsuljnOtn5RrQez5cng1fbPPsY5RuUweLsrTJnV2PF6vQasqshqqfquAirzW7Z2HRcizu69-r-OxKUqIbkQeTEiuqUnRxDWqjx61IYTLwW7tjpFO0WAUwUHUNVqXrQryeah0PI597pn4XNPbnk1M0vNlp650GrmyA-uPUVHKywtTmKzJ-H5q7nBs-9lX9lDhgGFCUoAq6AUF18o5es9JnWqYDY9oFIYsHTZOl44peYocbccvgUolW6fR2DdQuJI-PLeJTpV2K1DTZ8kSLT_X5szq-YHSd1wAPlv7W4EdFRwtoOi7a6-saDizYJh8aoSKqn7gf_n26FUgiDoL0KnWa46rB7OtV5nvlmOZGI2_6q6U_F6jRE0zGxCJva9vCMhTxsYjADK79d3-pM'
        }
    }
});

