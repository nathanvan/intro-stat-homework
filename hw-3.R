##
## http://www.stat.cmu.edu/~nmv/setup/stat202/hw-3.R
##
##
## Last update: 8-October-2014 by Nathan VanHoudnos

## Set the required package list
required.packages <- c('VennDiagram')

## Function to load R code
## ... based off of: 
##        http://stackoverflow.com/a/12195574/419842
source.setup <- function( code.to.run ) {
  url <- paste("http://www.stat.cmu.edu/~nmv/setup/stat202/",
               code.to.run,sep="")
  tryCatch( source(url),
    error=function(cond) {
      message(paste("Error with URL:\n\n   ", url,'\n'))
      message(cond)
      message("\n")
      stop("Stopping script.")
    },
    warning=function(cond) {
      message(paste("Error with URL:\n\n   ", url,'\n'))
      message(cond)
      message("\n")
      stop("Stopping script.")
    })
}

cat('Attempting to load required packages...\n')
for (pkg in required.packages) {
  if( pkg %in% rownames(installed.packages()) ) {
      require(pkg, character.only=TRUE)
  } else {
      tmp.msg <- paste('\n The required package "', pkg, '" is not installed on your system. \n', sep="")
      tmp.msg <- paste(tmp.msg, 'Please install it by copying the line below and pasting it\n into your R session: \n\n')
      tmp.msg <- paste(tmp.msg,'   install.packages("',pkg,'")\n\n',sep="")
      stop(tmp.msg)
  } 
}

cat('Attempting to load required datasets...\n')

## Clean up
rm(source.setup, required.packages)

cat("Done.\n")
