
export WORKDIR=`pwd`/dist

# check workdir and generate
rm -rf $WORKDIR && mkdir -p $WORKDIR
node build/generator.js > $WORKDIR/rokidos.json

