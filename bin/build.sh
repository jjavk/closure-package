#!/bin/bash

BUILD_DIR="$(dirname ${0})"
BASE_DIR="${BUILD_DIR}/.."

APP_NAME="echarttemplate"
#APP_NAME=$2
URL_APP="../../../kylin"
JS_APP_DIR="${BASE_DIR}/src/kylin"
APP_LEVEL="simple"

#COMPILATION_LEVEL="WHITESPACE_ONLY"
#COMPILATION_LEVEL="SIMPLE_OPTIMIZATIONS"
COMPILATION_LEVEL="ADVANCED_OPTIMIZATIONS"
DEBUG="false"
WARNING_LEVEL="verbose"

PYTHON_BIN="python"
JVM_ARCH="-d64"

CLOSURE_BUILD_DIR="${BASE_DIR}/src/js-closure/closure/bin/build"
CLOSURE_UTIL_DIR="${BASE_DIR}/bin/closure-tool"

JS_APP_INPUT="${JS_APP_DIR}/${APP_NAME}.js"

JS_APP_OUTPUT_LIST="${BUILD_DIR}/kylin/${APP_NAME}-list.js"
JS_APP_OUTPUT_SCRIPT="${BUILD_DIR}/kylin/${APP_NAME}-script.js"
JS_APP_OUTPUT_COMPILLED="${BUILD_DIR}/kylin/${APP_NAME}-${APP_LEVEL}-compiled.js"
JS_APP_OUTPUT_DEPS="${BUILD_DIR}/kylin/${APP_NAME}-deps.js"
JS_APP_OUTPUT_MESSAGES="${BUILD_DIR}/kylin/${APP_NAME}-messages.xtb"

JS_CLOSURE_LIB_DIR="${BASE_DIR}/src/js-closure/closure/goog"
JS_CLOSURE_THIRD_PARTY_DIR="${BASE_DIR}/src/js-closure/third_party/closure/goog"
JS_CLOSURE_SOY_DIR="${BASE_DIR}/src/js-soy"

TEMPLATE_DIR="${BUILD_DIR}/kylin"

URL_SOY="../../../js-soy"

LANG="cs"
LOCALE="cs"

list() {
	${PYTHON_BIN} ${CLOSURE_BUILD_DIR}/closurebuilder.py \
		--root=${JS_APP_DIR} \
		--root=${JS_CLOSURE_LIB_DIR} \
		--root=${JS_CLOSURE_THIRD_PARTY_DIR} \
		--root=${JS_CLOSURE_SOY_DIR} \
		--input=${JS_APP_INPUT} \
		--output_mode=list \
		--output_file=${JS_APP_OUTPUT_LIST}
}

script() {
	${PYTHON_BIN} ${CLOSURE_BUILD_DIR}/closurebuilder.py \
		--root=${JS_APP_DIR} \
		--root=${JS_CLOSURE_LIB_DIR} \
		--root=${JS_CLOSURE_THIRD_PARTY_DIR} \
		--root=${JS_CLOSURE_SOY_DIR} \
		--input=${JS_APP_INPUT} \
		--output_mode=script \
		--output_file=${JS_APP_OUTPUT_SCRIPT}
}

compile() {
	${PYTHON_BIN} ${CLOSURE_BUILD_DIR}/closurebuilder.py \
		--root=${JS_APP_DIR} \
		--root=${JS_CLOSURE_LIB_DIR} \
		--root=${JS_CLOSURE_THIRD_PARTY_DIR} \
		--root=${JS_CLOSURE_SOY_DIR} \
		--input=${JS_APP_INPUT} \
		--output_mode=compiled \
		--compiler_jar=${CLOSURE_UTIL_DIR}/compiler.jar \
		--jvm_flags="${JVM_ARCH}" \
		--compiler_flags="--compilation_level=${COMPILATION_LEVEL}" \
		--compiler_flags="--warning_level=${WARNING_LEVEL}" \
		--compiler_flags="--define=goog.DEBUG=${DEBUG}" \
		--compiler_flags="--define=goog.LOCALE='${LOCALE}'" \
		--output_file=${JS_APP_OUTPUT_COMPILLED}
}

deps() {
	${PYTHON_BIN} ${CLOSURE_BUILD_DIR}/depswriter.py \
		--root_with_prefix="${JS_APP_DIR} ${URL_APP}" \
		--root_with_prefix="${JS_CLOSURE_SOY_DIR} ${URL_SOY}" \
		--output_file=${JS_APP_OUTPUT_DEPS}
}

messages() {
	${PYTHON_BIN} ${CLOSURE_BUILD_DIR}/closurebuilder.py \
		--root=${JS_APP_DIR} \
		--root=${JS_CLOSURE_LIB_DIR} \
		--root=${JS_CLOSURE_THIRD_PARTY_DIR} \
		--root=${JS_CLOSURE_SOY_DIR} \
		--input=${JS_APP_INPUT} \
		--output_mode=compiled \
		--compiler_jar=${CLOSURE_UTIL_DIR}/XtbGenerator.jar \
		--jvm_flags="${JVM_ARCH}" \
		--compiler_flags="--translations_file=${JS_APP_MESSAGES}" \
		--compiler_flags="--xtb_output_file=${JS_APP_MESSAGES}" \
		--compiler_flags="--lang=${LANG}"
}

soy() {
	java -jar ${CLOSURE_UTIL_DIR}/SoyToJsSrcCompiler.jar \
		--outputPathFormat {INPUT_DIRECTORY}/{INPUT_FILE_NAME}.js \
		--shouldGenerateJsdoc \
		--shouldProvideRequireSoyNamespaces \
		--shouldGenerateGoogMsgDefs \
		--bidiGlobalDir 1 \
		--srcs $(find ${TEMPLATE_DIR} -iname '*.soy' -type f -print0 | xargs -0 echo)
}

info() {
	for arg in "$@"
 	do
     	echo $arg
 	done
}

case $1 in
	build)
		info "Compiling SOY"
		soy

		info "Generating messages"
		messages

		info "Compiling JS"
		compile
		;;
	list)
		list
		;;
	script)
		script
		;;
	compile)
		compile
		;;

	deps)
		deps
		;;

	messages)
		messages
		;;

	soy)
		soy
		;;
	info)
		info
		;;

	*)
		echo "Usage: $0 [build|script|compile|deps|messages|soy]"
		echo "---"
		echo "See http://www.closurecheatsheet.com/skeleton for more examples/usages"
		echo "---"
		exit 1
esac
