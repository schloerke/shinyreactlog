% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/setReactLog.R
\name{setReactLog}
\alias{setReactLog}
\alias{reactlog_enable}
\alias{reactlog_disable}
\title{Enable or disable the reactlog}
\usage{
reactlog_enable()

reactlog_disable(warn = TRUE)
}
\arguments{
\item{warn}{Should a warning message be shown?}
}
\description{
Before the reactlog can be visualized, it needs to be enabled. For security
and performance reasons, you should not enable the reactlog in a shiny app
in production.
}
\seealso{
\code{\link[=reactlog_show]{reactlog_show()}}
}
