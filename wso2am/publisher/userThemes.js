/**
 * IMPORTANT: This file only contains theme JSS of the Publisher app, Don't add other configuration parameters here.
 * This theme file is an extension of material-ui default theme https://material-ui.com/customization/default-theme/
 * Application related configurations are located in `<PUBLISHER_ROOT>site/public/theme/settings.json`
 */
const userThemes = {
    
    light(theme) {
        return (
            {
                overrides: {

                    '.jss469': {
                        color: '#2097d9', // Set the desired color (#00ADEE is light blue)
                      },

                      '.MuiFormLabel-root.MuiInputLabel-root.jss469.MuiInputLabel-animated': {
                        color: '#2097d9', // Set the desired color (#00ADEE is light blue)
                      },
                    MuiRadio: {
                        colorSecondary: {
                            '&$checked': { color: theme.palette.primary.main },
                            '&$disabled': {
                                color: theme.palette.action.disabled,
                            },
                        },
                    },
                },
                custom: {
                    wrapperBackground: '#f9f9f9',
                    // logo: '/site/public/images/coopbank.jpg', path: wso2am-4.2.0/repository/deployment/server/webapps/publisher/site/public/images
                    logo: '/site/public/images/cooperative-bank-of-ethiopia-logo-profit.jpg',
                    leftMenuWidth: 210,
                    contentAreaWidth: 1240,
                    drawerWidth: 250,
                    logoHeight: 70,
                    logoWidth: 222,
                    defaultApiView: "grid",
                    showApiHelp: false,
                    leftMenu: "icon left",
                    leftMenuIconSize: 24,
                    leftMenuIconMainSize: 52,
                    leftMenuTextStyle: "capitalize",
                },

                palette: {

                    primary: {
                        main: "#00ADEE"
                    },
                    secondary: {
                    },
                    background: {
                        appBar: "#2097d9"
                    },
                }
            }
        );
    },
};
if (typeof module !== 'undefined') {
    module.exports = userThemes; // Added for tests
}
