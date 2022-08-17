<?php

// https://stackoverflow.com/questions/8770910/difference-between-ob-clean-and-ob-flush

ob_start();
print "foo";      // This never prints because ob_end_clean just empties
ob_end_clean();   //    the buffer and never prints or returns anything.

ob_start();
print "bar";      // This IS printed, but just not right here.
ob_end_flush();   // It's printed here, because ob_end_flush "prints" what's in
                  // the buffer, rather than returning it
                  //     (unlike the ob_get_* functions)